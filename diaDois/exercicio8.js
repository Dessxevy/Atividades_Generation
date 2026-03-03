import leia from 'readline-sync';

let codigo, saldo, novoSaldo, valor;
let brl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

saldo = 1000;

console.log("=====MENU=====");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");

codigo = leia.questionFloat("\nEscolha uma opcao: ");

switch (codigo) {
    case 1:
        console.log("Operacao - Saldo");
        console.log(`O seu saldo é de ${saldo}`);
        break;
    case 2:
        console.log("Operacao - Saque");
        valor = leia.questionFloat("Qual valor voce deseja sacar?");
        novoSaldo = saldo - valor;
        console.log(saldo ? `Novo saldo: ${brl.format(novoSaldo)}` : "Saldo insuficiente!");
        break;
    case 3:
        console.log("Operacao: Deposito");
        valor = leia.questionFloat("Qual valor voce deseja depositar?");
        novoSaldo = saldo + valor;
        console.log(`Novo Saldo: ${brl.format(novoSaldo)}`);
        break;
    default:
        console.log("Operacao Invalida!");
        break;
}