import leia from 'readline-sync';

let numero, multiplos = 0, soma = 0, media = 0;

do{
numero = leia.questionInt("Digite um numero: ");
if(numero % 3 === 0 && numero !== 0){
   soma += numero;
   multiplos += 1;
}
}while(numero !== 0);
if (multiplos > 0) {
    media = soma / multiplos;
    console.log(`\nA média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
}