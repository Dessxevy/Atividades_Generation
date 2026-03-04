import leia from 'readline-sync';

let num1, num2;

num1 = leia.questionInt("Digite um numero: ");
num2 = leia.questionInt("Digite outro numero: ");

if (num1 > num2) {
    console.log("Intervalo Invalido!");
}

for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é multiplo de 3 e 5!`);
    }
}