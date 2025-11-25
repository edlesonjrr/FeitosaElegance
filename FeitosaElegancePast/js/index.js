import products from "./products.js";
import { addToCart, getCartQty } from "./cart.js";

const listProductHTML = document.querySelector('.listProduct');

/* ============================================================
   RENDERIZAÇÃO DOS PRODUTOS
============================================================ */
export function renderProducts() {
    if (!listProductHTML) return; // página sem lista → não executa

    listProductHTML.innerHTML = "";

    products.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.dataset.id = p.id;

        // Se está no carrinho, deixa o card dourado
        if (getCartQty(p.id) > 0) {
            div.classList.add("selected");
        }

        div.innerHTML = `
    <a href="detail.html?id=${p.id}" class="product-link title-link">
        <img src="${p.image}" alt="${p.name}">
    </a>

    <h2>
        <a href="detail.html?id=${p.id}" class="product-link title-link">
            ${p.name}
        </a>
    </h2>

    <div class="price">R$ ${p.price.toFixed(2)}</div>

    <button class="addCart" data-id="${p.id}">
        Adicionar
    </button>
`;


        listProductHTML.appendChild(div);
    });
}

/* ============================================================
   CLICK — ADICIONAR AO CARRINHO
============================================================ */
document.addEventListener("click", e => {
    const btn = e.target.closest(".addCart");
    if (!btn) return;

    const id = Number(btn.dataset.id);

    addToCart(id);

    // destacar card (se estiver na loja)
    const card = document.querySelector(`.listProduct .item[data-id="${id}"]`);
    if (card) card.classList.add("selected");
});

/* ============================================================
   ATUALIZA MARCAÇÃO DOURADA (quando carrinho muda)
============================================================ */
export function updateSelectedItems() {
    if (!listProductHTML) return;

    document.querySelectorAll(".listProduct .item").forEach(item => {
        const id = Number(item.dataset.id);

        if (getCartQty(id) > 0) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    });
}

/* ============================================================
   EVENTO GLOBAL — CART UPDATED
============================================================ */
document.addEventListener("cartUpdated", updateSelectedItems);

/* ============================================================
   INICIALIZAÇÃO
============================================================ */
renderProducts();
