

let cores = ["vermelho ", "azul", "verde"]

var produtos : {id:string , nome:string , cor: string , tamanho: String , preco: string } []= []

let corSelect = document.getElementById("cor") as HTMLSelectElement;

cores.forEach(cor => {
    let option = document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option);


})
let tamanho = ["p ", "m", "g" , "gg"]
let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement;

tamanho.forEach(tamanho => {
    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option);

})


function save(){
    const produtoInput = document.getElementById("produto") as HTMLInputElement;
    const corInput = document.getElementById("cor") as HTMLSelectElement;
    const tamanhoInput = document.getElementById("tamanho") as HTMLSelectElement;
    const precoInput = document.getElementById("preco") as HTMLSelectElement;

    const produto = {
        id: crypto.randomUUID(),
        nome: precoInput.value,
        cor : corSelect.value,
        tamanho :tamanhoSelect.value,
        preco : precoInput.value


    }
    
    produtos.push(produto)
    

    


}



