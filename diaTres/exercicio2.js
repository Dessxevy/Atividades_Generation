import leia from 'readline-sync';

let pares = 0;
let impares = 0;
let numero;

for (let i = 1; i <= 10; i++) {
    numero = leia.questionInt(`Digite o ${i}º numero: `);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`\nTotal de números impares: ${impares}`);