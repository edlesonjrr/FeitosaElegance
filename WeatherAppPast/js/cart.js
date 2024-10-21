// Inicializa o carrinho e o valor total
let cart = [];
let totalPrice = 0;

// Função para adicionar produto ao carrinho
function addToCart(productId, productName, price) {
    // Verifica se o produto já está no carrinho
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        // Se o produto já estiver no carrinho, não adiciona novamente
        return;
    }

    cart.push({ id: productId, name: productName, price: parseFloat(price) });
    totalPrice += parseFloat(price);

    // Marca o botão como selecionado
    document.getElementById(productId).classList.add('selected');

    updateCartUI();
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    // Restaura o estado do botão "Adicionar ao Carrinho"
    document.getElementById(productId).classList.remove('selected');

    // Atualiza o totalPrice
    totalPrice -= parseFloat(document.querySelector(`#${productId}`).getAttribute('data-product-price'));

    updateCartUI();
}

// Função para atualizar a interface do carrinho
function updateCartUI() {
    const cartPopup = document.getElementById('cart-popup');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = ''; // Limpa a lista antes de renderizar novamente
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <span class="remove-item" onclick="removeFromCart('${item.id}')">x</span>`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = `Valor Total: R$ ${totalPrice.toFixed(2)}`;
    cartPopup.style.display = cart.length > 0 ? 'block' : 'none';
}

// Função para enviar os produtos selecionados via WhatsApp
function sendToWhatsApp() {
    const whatsappNumber = '5581982744190'; // Número do WhatsApp
    let message = 'Produtos selecionados:\n';

    cart.forEach(item => {
        message += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });
    
    message += `\nValor Total: R$ ${totalPrice.toFixed(2)}`;

    // Abrir WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Função para fechar o pop-up e resetar o carrinho
function resetCart() {
    cart = []; // Reseta o array de carrinho
    totalPrice = 0; // Reseta o preço total
    updateCartUI(); // Atualiza o pop-up

    // Restaura o estado de todos os botões "Adicionar ao Carrinho"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.classList.remove('selected');
    });
}

// Evento de clique no botão "Adicionar ao carrinho"
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.id; // ID do botão
        const productName = this.getAttribute('data-product-name'); // Nome do produto
        const price = this.getAttribute('data-product-price'); // Preço do produto

        addToCart(productId, productName, price);
    });
});

// Evento de clique no botão "Comprar via WhatsApp"
document.getElementById('checkout-btn').addEventListener('click', function () {
    sendToWhatsApp();
});

// Evento de clique no botão "X" para fechar o pop-up e resetar o carrinho
document.getElementById('close-popup').addEventListener('click', function () {
    resetCart(); // Reseta o carrinho
});
