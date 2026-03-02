const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionInt("Digite o salario bruto: ");
console.log(`Salario bruto = ${salarioBruto}`);

adicionalNoturno = leia.questionInt("\nDigite o adicional Noturno: ");
console.log(`Adicional noturno = ${adicionalNoturno}`);

horasExtras = leia.questionInt("\nDigite as horas extras: ");
console.log(`Horas extras = ${horasExtras}`);

descontos = leia.questionInt("\nDigite os descontos: ");
console.log(`Descontos = ${descontos}`);

salarioLiquido = salarioBruto + adicionalNoturno - descontos +(horasExtras * 5);
console.log(`\nSalario liquido = ${salarioLiquido}`);
