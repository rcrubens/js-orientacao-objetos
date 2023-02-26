import { Cliente } from "./Cliente.js";
export class ContaCorrente {

    static conta = 0; // declarado dessa forma para que a criação de um novo objeto não o altere
    agencia;
    _cliente;

    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields

    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia, conta) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.conta += 1;

    }

    sacar(valor) {
        if (this._saldo < valor) {
            return; // técnica de early return para melhorar a legibilidade do código
        }
        this._saldo -= valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}