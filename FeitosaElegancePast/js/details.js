import products from "./products.js";
import { addToCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const product = products.find(p => p.id === id);

    if (!product) {
        window.location.href = "loja.html";
        return;
    }

    document.querySelector(".detail .image img").src = product.image;
    document.querySelector(".detail .name").innerText = product.name;
    document.querySelector(".detail .price").innerText = `R$ ${product.price.toFixed(2)}`;
    document.querySelector(".detail .description").innerText = product.description;

    const addBtn = document.querySelector(".btn-add");
    addBtn.dataset.id = product.id;
    addBtn.addEventListener("click", () => addToCart(product.id));

    const listHTML = document.querySelector(".listProduct");
    listHTML.innerHTML = "";

    products.forEach(p => {
        if (p.id === id) return;

        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <a href="detail.html?id=${p.id}">
                <img src="${p.image}" alt="${p.name}">
            </a>
            <h2>${p.name}</h2>
            <div class="price">R$ ${p.price.toFixed(2)}</div>
            <button class="addCart" data-id="${p.id}">Adicionar</button>
        `;

        listHTML.appendChild(div);
    });

    listHTML.addEventListener("click", (e) => {
        const btn = e.target.closest(".addCart");
        if (!btn) return;

        const pid = Number(btn.dataset.id);
        addToCart(pid);
    });
});
