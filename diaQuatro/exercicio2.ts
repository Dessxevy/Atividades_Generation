import readlinesync from "readline-sync";

const array: Array<number> = [2,5,1,3,4,9,7,8,10,6];
let pesquisa: number;


pesquisa = readlinesync.questionInt("Digite o número que voc~e deseja encontrar: ");

let posicao = array.indexOf(pesquisa);

if(posicao !== -1){
    console.log(`O número ${pesquisa} está localizado na
posição: ${posicao}`);
} else{
    console.log(`O número ${pesquisa} não foi encontrado!`);
}


    