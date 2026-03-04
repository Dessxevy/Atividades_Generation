import leia from 'readline-sync';

let idade;
let menores = 0;
let maiores = 0;

idade = leia.questionInt("Digite a sua idade: ");
while (idade > 0) {
    if (idade < 21) {
        menores++
    } else if (idade > 50) {
        maiores++
    }
    idade = leia.questionInt("Digite a sua idade: ");
}


console.log(`\nTotal de pessoas menores de 21 anos: ${menores}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maiores}`);