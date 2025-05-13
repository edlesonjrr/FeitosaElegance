// Produtos e preços
const products = [
    { id: 'prod1', name: 'Bolsa Morizetti', price: 360 },
    { id: 'prod2', name: 'Bolsa de Couro', price: 500 },
    // Continue adicionando os produtos aqui
];

// Inicializa o carrinho e o valor total
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// Função para carregar produtos dinamicamente
function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-lg-3', 'd-flex', 'mb-sm-4');
        productDiv.innerHTML = `
            <div class="staff">
                <div class="img mb-4" style="background-image: url(images/${product.id}.png);"></div>
                <div class="info text-center">
                    <h3>${product.name}</h3>
                    <span class="position">R$ ${product.price.toFixed(2)}</span>
                    <button id="${product.id}" class="add-to-cart-btn" data-product-name="${product.name}" data-product-price="${product.price}">Colocar no carrinho</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productId, productName, price) {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) return;

    cart.push({ id: productId, name: productName, price: parseFloat(price) });
    totalPrice += parseFloat(price);
    document.getElementById(productId).classList.add('selected');
    updateCartUI();
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    const productPrice = products.find(product => product.id === productId).price;
    totalPrice -= productPrice;
    document.getElementById(productId).classList.remove('selected');
    updateCartUI();
}

// Função para atualizar a interface do carrinho
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <span class="remove-item" onclick="removeFromCart('${item.id}')">x</span>`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = `Valor Total: R$ ${totalPrice.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
}

// Função para enviar os produtos via WhatsApp
function sendToWhatsApp() {
    const whatsappNumber = '5581982744190';
    let message = 'Produtos selecionados:\n';
    cart.forEach(item => {
        message += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });
    message += `\nValor Total: R$ ${totalPrice.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Função para resetar o carrinho
function resetCart() {
    cart = [];
    totalPrice = 0;
    updateCartUI();
    document.querySelectorAll('.add-to-cart-btn').forEach(button => button.classList.remove('selected'));
}

// Carregar produtos e eventos após o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.id;
            const productName = this.getAttribute('data-product-name');
            const price = this.getAttribute('data-product-price');
            addToCart(productId, productName, price);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', sendToWhatsApp);
    document.getElementById('close-popup').addEventListener('click', resetCart);
});
