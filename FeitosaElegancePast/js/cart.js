const products = [
    { id: "prod1", name: "Bolsa Morizetti", price: 360 },
    { id: "prod2", name: "Bolsa de Couro", price: 500 },
    { id: "prod3", name: "Bolsa Premium", price: 420 },
    { id: "prod4", name: "Relógio Clássico", price: 250 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(p => {
        list.innerHTML += `
        <div class="col-lg-3 d-flex mb-sm-4">
            <div class="staff">
                <div class="img mb-4" style="background-image: url(images/${p.id}.png);"></div>
                <div class="info text-center">
                    <h3>${p.name}</h3>
                    <span class="position">R$ ${p.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn"
                        data-id="${p.id}"
                        data-name="${p.name}"
                        data-price="${p.price}">
                        Colocar no carrinho
                    </button>
                </div>
            </div>
        </div>`;
    });
}

function openCart() {
    document.getElementById("cart-popup").classList.add("open");
}

function closeCart() {
    document.getElementById("cart-popup").classList.remove("open");
}

function updateCart() {
    const ul = document.getElementById("cart-items");
    ul.innerHTML = "";

    if (cart.length === 0) {
        ul.innerHTML = `<p class="empty-msg">Seu carrinho está vazio</p>`;
        document.getElementById("total-price").textContent = `Total: R$ 0,00`;
        save();
        return;
    }

    cart.forEach(item => {
        ul.innerHTML += `
            <li>
                <span>(${item.qty}x) ${item.name}</span>
                <div class="qty-box">
                    <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                    <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </li>
        `;
    });

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    document.getElementById("total-price").textContent = `Total: R$ ${total.toFixed(2)}`;

    save();
}

function changeQty(id, delta) {
    let item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    updateCart();
}

function addToCart(prod) {
    let item = cart.find(i => i.id === prod.id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ ...prod, qty: 1 });
    }

    updateCart();
    openCart();
}

function sendToWhatsApp() {
    const number = "5581982744190";
    let msg = "Olá! Gostaria de comprar:\n\n";

    cart.forEach(i => {
        msg += `${i.qty}x ${i.name} - R$ ${(i.qty * i.price).toFixed(2)}\n`;
    });

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    msg += `\nTotal: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`);
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCart();

    // Botões adicionar produto
    document.addEventListener("click", e => {
        if (e.target.classList.contains("add-to-cart-btn")) {
            addToCart({
                id: e.target.dataset.id,
                name: e.target.dataset.name,
                price: parseFloat(e.target.dataset.price)
            });
        }
    });

    document.getElementById("cart-icon").addEventListener("click", openCart);
    document.getElementById("close-popup").addEventListener("click", closeCart);
    document.getElementById("checkout-btn").addEventListener("click", sendToWhatsApp);
});
