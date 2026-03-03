import leia from 'readline-sync';

let operacao, num1, num2, resultado;


num1 = leia.questionFloat("\nDigite um numero: ");
num2 = leia.questionFloat("\nDigite outro numero: ");

console.log("\n*****OPERACOES*****");
console.log("1 corresponde a soma");
console.log("2 corresponde a subtração");
console.log("3 corresponde a multiplicação");
console.log("4 corresponde a divisão");

operacao =leia.questionInt("\nDigite o numero de acordo com o operador desejado: ");

switch (operacao){
case 1:
resultado = num1 + num2
console.log(`\n${num1} + ${num2} = ${resultado.toFixed(1)}`);
break;
case 2:
resultado = num1 - num2
console.log(`\n${num1} - ${num2} = ${resultado.toFixed(1)}`);
break;
case 3:
resultado = num1 * num2
console.log(`\n${num1} * ${num2} = ${resultado.toFixed(1)}`);
break;
case 4:
resultado = num1 / num2
console.log(`\n${num1} / ${num2} = ${resultado.toFixed(1)}`);
break;
default:
    console.log("Operação invalida");
}