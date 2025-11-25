// cart.js — versão final corrigida e compatível com index.js + details.js
import products from "./products.js";

let cart = [];             
let listCartHTML;
let iconCartSpan;

/* --- Evento para atualizar telas --- */
function dispatchCartUpdate() {
    document.dispatchEvent(new Event("cartUpdated"));
}

/* --- LocalStorage --- */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem("cart");
    cart = saved ? JSON.parse(saved) : [];
}

/* --- Obter quantidade de um item --- */
export function getCartQty(id) {
    id = Number(id);
    const item = cart.find(i => i.product_id === id);
    return item ? item.quantity : 0;
}

/* --- Adicionar item --- */
export function addToCart(id) {
    id = Number(id);

    let item = cart.find(i => i.product_id === id);

    if (!item) {
        cart.push({ product_id: id, quantity: 1 });
    } else {
        item.quantity++;
    }

    saveCart();
    renderCart();
    dispatchCartUpdate();
}

/* --- Remover item --- */
export function removeFromCart(id) {
    id = Number(id);

    let index = cart.findIndex(i => i.product_id === id);
    if (index < 0) return;

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
    dispatchCartUpdate();
}

/* --- Definir quantidade --- */
function setProductInCart(id, qty) {
    id = Number(id);
    let index = cart.findIndex(i => i.product_id === id);

    if (qty <= 0) {
        if (index >= 0) cart.splice(index, 1);
    } else if (index < 0) {
        cart.push({ product_id: id, quantity: qty });
    } else {
        cart[index].quantity = qty;
    }

    saveCart();
    renderCart();
    dispatchCartUpdate();
}

/* --- Render do carrinho lateral --- */
function renderCart() {
    listCartHTML.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.product_id);
        if (!product) return;

        total += item.quantity;

        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <div class="image">
                <img src="${product.image}">
            </div>

            <div class="name">${product.name}</div>

            <div class="totalPrice">R$ ${(product.price * item.quantity).toFixed(2)}</div>

            <div class="quantity">
                <span class="minus" data-id="${product.id}">‹</span>
                <span>${item.quantity}</span>
                <span class="plus" data-id="${product.id}">›</span>
            </div>
        `;

        listCartHTML.appendChild(div);
    });

    iconCartSpan.innerText = total;
}

/* --- Eventos globais --- */
function registerEvents() {
    document.addEventListener("click", e => {
        let el = e.target;
        let id = el.dataset.id;

        if (!id) return;

        id = Number(id);

        let index = cart.findIndex(i => i.product_id === id);

        if (el.classList.contains("minus") && index >= 0) {
            setProductInCart(id, cart[index].quantity - 1);
        }

        if (el.classList.contains("plus") && index >= 0) {
            setProductInCart(id, cart[index].quantity + 1);
        }
    });
}

/* --- Inicialização --- */
const cartInit = () => {
    listCartHTML = document.querySelector('.listCart');

    const iconCart = document.querySelector('.icon-cart');
    iconCartSpan = iconCart.querySelector("span");

    const closeCart = document.querySelector('.close');
    const body = document.body;

    // abrir / fechar sidebar
    iconCart.addEventListener("click", () => body.classList.toggle("activeTabCart"));
    closeCart.addEventListener("click", () => body.classList.toggle("activeTabCart"));

    loadCart();
    renderCart();
    registerEvents();

    // Dispara atualização inicial para index.js / details.js
    dispatchCartUpdate();
};

export default cartInit;
