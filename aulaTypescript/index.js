"use strict";
let nomeCompleto = "Henrique Bendzius";
let pi = 3.14;
let idade = 40;
console.log(nomeCompleto);
//tipos 
let frase = 'olá '; // string
let peso = 45.5;
let estaAprovado = true;
let texto = `${frase} ${nomeCompleto}. vc tem ${idade} anos e pesa ${peso} Kg`;
console.log(texto);
//***************************************************** *//
let texto2 = [];
let texto3 = ["olá", "mundo"];
console.log("array texto 2 ");
texto2.push("teste");
texto2.push("outro item");
texto2.push("mais um item");
console.log(`itens do texto 2 ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 15];
numeros.push(50);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
let listarPessoas = [];
let pessoa = {
    nome: "henrique",
    idade: 40
};
listarPessoas.push(pessoa);
let outraPessoa = {
    nome: "henri",
    idade: 30
};
listarPessoas.push(outraPessoa);
listarPessoas.forEach(pessoa => {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
});
