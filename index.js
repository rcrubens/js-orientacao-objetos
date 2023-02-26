import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Rubens", 77711122200);
const cliente2 = new Cliente("Breno", 88811122200);

const contaCorrenteRubens = new ContaCorrente(cliente1, 1001);
const contaCorrenteBreno = new ContaCorrente(cliente2, 1002);

contaCorrenteRubens.depositar(153.4)
contaCorrenteRubens.sacar(53.4)
console.log(ContaCorrente.conta);
