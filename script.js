// Lista de filmes
const filmes = ["O Poderoso Chefão", "Interestelar", "Batman: O Cavaleiro das Trevas", "Pulp Fiction"];

const listaElemento = document.getElementById("lista-filmes");
const botao = document.getElementById("btn-recomendar");

// Função para exibir a lista na tela
function exibirFilmes() {
    listaElemento.innerHTML = ""; // Limpa a lista antes de renderizar
    filmes.forEach(filme => {
        let item = document.createElement("li");
        item.textContent = filme;
        listaElemento.appendChild(item);
    });
}

// Evento do botão
botao.addEventListener("click", () => {
    const novoFilme = prompt("Qual filme você recomenda?");
    if (novoFilme) {
        filmes.push(novoFilme);
        exibirFilmes();
    }
});

// Inicia a lista ao carregar a página
exibirFilmes();