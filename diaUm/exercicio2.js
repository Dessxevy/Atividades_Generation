const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat("Digite a primeira nota: ");
console.log(`A nota digitada foi: ${nota1}`);

nota2 = leia.questionFloat("\nDigite a segunda nota: ");
console.log(`A nota digitada foi: ${nota2}`);

nota3 = leia.questionFloat("\nDigite a terceira nota: ");
console.log(`A nota digitada foi: ${nota3}`);

nota4= leia.questionFloat("\nDigite a quarta nota: ");
console.log(`A nota digitada foi: ${nota4}`);

media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);
console.log(`\nA media final entre as notas = ${media}`);