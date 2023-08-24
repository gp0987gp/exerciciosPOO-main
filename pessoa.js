"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitação = " já posso tirar minha CNH ";
        if (this.idade < 18) {
            msgHabilitação = " Não posso tirar minha CNH ";
        }
        return "Olá meu nome é " + this.nome +
            " e eu tenho " + this.idade + " anos. " + msgHabilitação + ".";
        comidasFavoritas();
        {
            console.log("Minha(s) comida(s) favorita(s)");
            for (let i = 0; i < ;  = this.comidas.length)
                ;
            i++;
            {
                console.log(this.comidas[i]);
            }
        }
    }
}
let pessoal = new Pessoa("trunks", 16, ["x-salada", "parmegiana",]);
console.log(pessoal.cumprimentar());
console.log(pessoal.comidasFavoritas());
