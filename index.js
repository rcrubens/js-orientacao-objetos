class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Rubens";
cliente1.cpf = 00011122299;

const cliente2 = new Cliente();
cliente2.nome = "Marcelo";
cliente2.cpf = 88811122299;

const contaCorrenteRubens = new ContaCorrente();
contaCorrenteRubens.agencia = 1001;
contaCorrenteRubens.saldo = 0;

console.log(cliente1, cliente2);