const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = leia.questionInt("Digite um valor: ");
console.log(`Valor 1 = ${n1}`)

n2 = leia.questionInt("\nDigite um valor: ");
console.log(`Valor 2 = ${n2}`)

n3 = leia.questionInt("\nDigite um valor: ");
console.log(`Valor 3 = ${n3}`)

n4 = leia.questionInt("\nDigite um valor: ");
console.log(`Valor 4 = ${n4}`);

diferenca = (n1 * n2) - (n3 * n4);
console.log(`\nA diferenca é = ${diferenca}`);