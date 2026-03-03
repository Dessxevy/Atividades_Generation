import leia from 'readline-sync';

let numero, numero2;

numero = leia.questionInt("Digite um numero: ");

numero2 = numero % 2;

if(numero2 == 0 && numero > 0){
    console.log(`\nO numero ${numero} é par e positivo!`);
}else if(numero2 == -1 && numero < 0){
    console.log(`\nO numero ${numero} é impar e negativo!`);
}else if(numero2 == 0 && numero < 0){
    console.log(`\nO numero ${numero} é par e negativo!`);
}else if(numero2 == 1 && numero > 0){
    console.log(`\nO numero ${numero} é impar e positivo!`);
}else{
    console.log("\nO numero é 0");
}