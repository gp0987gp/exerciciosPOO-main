"use strict";
class ContaBancaria {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
    apresentar() {
        console.log("Este é " + this.titular + ", com o numero da conta " + this.numeroConta, "");
    }
}
