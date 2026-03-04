import leia from 'readline-sync';

let numero, positivo = 0;

do{
numero = leia.questionInt("Digite um numero: ");
if(numero > 0){
    positivo += numero;
}
}while(numero !== 0);


console.log(`A soma dos números positivos é: ${positivo}`)