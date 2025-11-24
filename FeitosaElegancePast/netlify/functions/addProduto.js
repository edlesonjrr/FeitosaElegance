import { blobs } from "@netlify/blobs";

export default async (req) => {
    if (req.method !== "POST") {
        return new Response("Método não permitido", { status: 405 });
    }

    const { nome, preco, imagem } = await req.json();

    if (!nome || !preco || !imagem) {
        return new Response("Dados inválidos", { status: 400 });
    }

    const store = blobs("produtos");

    let lista = await store.get("produtos.json", { type: "json" }) || [];

    const novoProduto = {
        id: "prod_" + Math.random().toString(36).substring(2, 9),
        nome,
        preco,
        imagem
    };

    lista.push(novoProduto);

    await store.setJSON("produtos.json", lista);

    return new Response(JSON.stringify({ sucesso: true, produto: novoProduto }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
};
