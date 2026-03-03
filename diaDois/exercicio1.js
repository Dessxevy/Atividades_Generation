import leia from 'readline-sync';

let valorA, valorB, valorC, soma;

valorA = leia.questionInt("Digite o numero A: ");
valorB = leia.questionInt("Digite o numero B: ");
valorC = leia.questionInt("Digite o numero C: ");

soma = valorA + valorB;

if(soma > valorC){
    console.log(`\n${valorA} + ${valorB} = ${soma} > ${valorC}`);
    console.log("\nA soma de A + B é Maior do que C");
} else if(soma < valorC){
    console.log(`\n${valorA} + ${valorB} = ${soma} < ${valorC}`);
    console.log("\nA soma de A + B é Menor do que C");
} else{
    console.log(`\n${valorA} + ${valorB} = ${soma} = ${valorC}`);
    console.log("\nA soma de A + B é Igual do que C");
}
