if (!localStorage.getItem('produtos-selecionados')) {
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}

let produtos = [];
fetch("https://deisishop.pythonanywhere.com/products/")
    .then(response => response.json())
    .then(data => {
        produtos = data;
        carregarProdutos(produtos);
    });

function criarProduto(produto) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${produto.title}</h3>
        <img src="${produto.image}" alt="${produto.title}">
        <p>${produto.description}</p>
        <p>Preço: ${produto.price.toFixed(2)} €</p>
        <button onclick="addToCart(${produto.id})">+ Adicionar ao Cesto</button>
    `;
    return article;
}

function carregarProdutos(prod) {
    const section = document.getElementById("produtos");
    section.innerHTML = "";
    prod.forEach(produto => {
        section.append(criarProduto(produto));
    });
}

function criarProdutoCesto(produto) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${produto.title}</h3>
        <img src="${produto.image}" alt="${produto.title}">
        <p>Preço: ${produto.price.toFixed(2)} €</p>
        <button onclick="removeFromCart(${produto.id})">- Remover do Cesto</button>
    `;
    return article;
}

function atualizaCesto() {
    const section = document.getElementById("cesto");
    section.innerHTML = "";
    let somaTotal = 0;
    const lista = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];

    lista.forEach(produto => {
        section.append(criarProdutoCesto(produto));
        somaTotal += parseFloat(produto.price);
    });

    document.getElementById("custoTotal").textContent = `Custo Total: ${somaTotal.toFixed(2)} €`;
}

function addToCart(productId) {
    const produto = produtos.find(p => p.id === productId);
    const lista = JSON.parse(localStorage.getItem('produtos-selecionados'));
    lista.push(produto);
    localStorage.setItem('produtos-selecionados', JSON.stringify(lista));
    atualizaCesto();
}

function removeFromCart(productId) {
    const lista = JSON.parse(localStorage.getItem('produtos-selecionados'));
    const index = lista.findIndex(item => item.id === productId);
    lista.splice(index, 1);
    localStorage.setItem('produtos-selecionados', JSON.stringify(lista));
    atualizaCesto();
}

function comprar() {
    const botaoComprar = document.getElementById("botao");
    botaoComprar.onclick = function () {
        const produtosCarrinho = JSON.parse(localStorage.getItem("produtos-selecionados")) || [];
        const idProdutos = produtosCarrinho.map(produto => produto.id);

        const checkBox = document.getElementById("alunoDeisi").checked;
        const cupaoDesconto = document.getElementById("cupao").value;

        const bodyEnvio = {
            products: idProdutos,
            student: checkBox,
            coupon: cupaoDesconto
        };

        fetch("https://deisishop.pythonanywhere.com/buy/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyEnvio)
        })
            .then(response => response.json())
            .then(data => {
                const section = document.getElementById("checkout");

                // Exibindo o valor final
                let valorFinal = document.getElementById("desconto");
                if (!valorFinal) {
                    valorFinal = document.createElement("h3");
                    valorFinal.id = "desconto";
                    section.append(valorFinal);
                }
                valorFinal.textContent = `Valor final a pagar (com eventuais descontos): ${parseFloat(data.totalCost).toFixed(2)} €`;

                // Exibindo a referência de pagamento
                let referenciaPagamento = document.getElementById("referencia");
                if (!referenciaPagamento) {
                    referenciaPagamento = document.createElement("p");
                    referenciaPagamento.id = "referencia";
                    section.append(referenciaPagamento);
                }
                referenciaPagamento.textContent = `Referência de pagamento: ${data.reference}`;
            })
            .catch(error => {
                document.getElementById("checkout-result").textContent = `Erro ao processar o pagamento: ${error.message}`;
            });
    };
}

document.addEventListener("DOMContentLoaded", () => {
    atualizaCesto();
    comprar();
});
