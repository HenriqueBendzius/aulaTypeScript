"use strict";
let cores = ["vermelho ", "azul", "verde"];
var produtos = [];
let corSelect = document.getElementById("cor");
cores.forEach(cor => {
    let option = document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option);
});
let tamanho = ["p ", "m", "g", "gg"];
let tamanhoSelect = document.getElementById("tamanho");
tamanho.forEach(tamanho => {
    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option);
});
function save() {
    const produtoInput = document.getElementById("produto");
    const corInput = document.getElementById("cor");
    const tamanhoInput = document.getElementById("tamanho");
    const precoInput = document.getElementById("preco");
    const produto = {
        id: crypto.randomUUID(),
        nome: precoInput.value,
        cor: corSelect.value,
        tamanho: tamanhoSelect.value,
        preco: precoInput.value
    };
    produtos.push(produto);
}
