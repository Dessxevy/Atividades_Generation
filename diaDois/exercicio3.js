import leia from 'readline-sync';

let nome, idade, doacao;

nome = leia.question("Qual o seu nome coompleto?");
idade = leia.questionInt("\nDigite a sua idade: ")

if(idade >=18 && idade < 60){
    console.log(`${nome} está apto a doar sangue!`);
} else if(idade >= 18 && idade > 59){
    doacao = leia.keyInYN("\n E a sua primeira doacao?");
    if(doacao){
 console.log(`${nome} não está apto a doar sangue!`);
    } else{
          console.log(`${nome} está apto a doar sangue!`);
    }
}else{
     console.log(`${nome} não está apto a doar sangue!`);
}