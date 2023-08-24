class Produto{
    nome: string;
    preco: number;
    modelo: string;
   

    constructor(nome: string, preco: number, modelo: string)
    {
        this.nome = nome;
        this.preco = preco;
        this.modelo = modelo;
       

    }

    descricao(){
        return "O " + this.nome + " é um dos melhores no mercado atual com um valor de " 
        + this.preco + " , e é do modelo " + this.modelo + " que é um dos mais recentes do mercado."
    }
    descontos(desconto: number){
       let valorDesconto = ((this.preco/100) * desconto);
        return "Desconto de " + desconto + " aplicado . " + "Novo preço de  " + (this.preco - valorDesconto);
}
}
let produto = new Produto("Celular", 1200, "Motorola");
let produto2 = new Produto("Fone", 300, "Xiaomi" );
let produto3 = new Produto("Notebook", 8000, "Dell G15");


console.log(produto);
console.log(produto2);
console.log(produto3);
console.log(produto.descricao());
console.log(produto2.descricao());
console.log(produto3.descricao());
console.log(produto.descontos(10));
console.log(produto2.descontos(10));
console.log(produto3.descontos(10));