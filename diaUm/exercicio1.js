const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionInt("Digite o salario: ");
console.log(`O salario é ${salario}`);

abono = leia.questionInt("\nDigite o abono: ");
console.log(`Abono = ${abono}`);

novoSalario = salario + abono;
console.log(`\nNovo salario = ${novoSalario}`);