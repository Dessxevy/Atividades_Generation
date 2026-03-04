import leia from 'readline-sync';

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let num = leia.questionInt("Digite um numero: ");
let indice = vetor.indexOf(num);


if(indice !== -1){
    console.log(`o numero ${num} esta localizado na posicao: ${indice}`)
} else{
    console.log(`O numero ${num} nao foi encontrado`);
}