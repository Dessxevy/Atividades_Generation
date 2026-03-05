import readlinesync from "readline-sync";

const numero = new Set<number>([2,5,1,3,4,9,7,8,10,6]);
let pesquisa: number;

pesquisa = readlinesync.questionInt("Digite o número que você deseja encontrar: ");

if(numero.has(pesquisa)){
    console.log(`O número ${pesquisa} foi encontrado!`);
} else{
    console.log(`O número ${pesquisa} não foi encontrado!`);
}


    