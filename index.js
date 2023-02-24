class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields

    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;      
            console.log(contaCorrenteRubens._saldo)      
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Rubens";
cliente1.cpf = 00011122299;

const cliente2 = new Cliente();
cliente2.nome = "Marcelo";
cliente2.cpf = 88811122299;

const contaCorrenteRubens = new ContaCorrente();
contaCorrenteRubens.agencia = 1001;

contaCorrenteRubens.depositar(153.4)
console.log(contaCorrenteRubens);