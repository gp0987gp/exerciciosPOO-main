"use strict";
class Animal {
    constructor(nome, qtdpatas) {
        this.nome = nome;
        this.qtdPatas = qtdpatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + "patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
class Gato extends Animal {
    constructor() {
        super("gato", 2);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
class Passaro extends Animal {
    constructor() {
        super("gato", 2);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
const gato = new Gato();
gato.apresentar();
gato.fazerBarulho();
const passaro = new Passaro();
passaro.apresentar();
passaro.fazerBarulho();
const Cachorro = new Dog();
Dog.apresentar();
Dog.fazerBarulho();
