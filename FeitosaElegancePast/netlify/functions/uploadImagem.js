import { blobs } from "@netlify/blobs";

export default async (req) => {
    if (req.method !== "POST") {
        return new Response("Método não permitido", { status: 405 });
    }

    const form = await req.formData();
    const file = form.get("file");

    if (!file) {
        return new Response("Nenhuma imagem enviada", { status: 400 });
    }

    const id = "img_" + Date.now();

    const store = blobs("imagens");

    await store.set(id, file, {
        contentType: file.type
    });

    const publicUrl = store.getPublicUrl(id);

    return new Response(JSON.stringify({ url: publicUrl }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
};
