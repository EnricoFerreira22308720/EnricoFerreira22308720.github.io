const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    productList.innerHTML = '';

    produtos.forEach(product => {
        const productArticle = document.createElement('article');
        
        productArticle.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}">
            <p>Custo: ${product.price} €</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">+ Adicionar ao Cesto</button>
        `;

        productList.appendChild(productArticle);
    });
}

function renderCart() {
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartArticle = document.createElement('article');
        cartArticle.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>Custo: ${item.price} €</p>
        `;
        cartItems.appendChild(cartArticle);
    });
}

function addToCart(productId) {
    const product = produtos.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderProducts();
renderCart();
