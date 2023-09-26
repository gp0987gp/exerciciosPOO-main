abstract class ContaBancaria {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta: string, saldo: number, titular: string) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;

    }

    abstract contaBancaria(): string;
    apresentar(): void {
        console.log("Este é " + this.titular + ", com o numero da conta " + this.numeroConta, "")
    }


}