import leia from 'readline-sync';

let idade, genero, especialidade;
let continuar = true;
let mulher = 0, homem= 0, naoBinario = 0, total = 0, outro = 0;
let front = 0, back = 0, mobile = 0, fulls = 0;
let mulherFront = 0, homemMobile40 = 0,  nbFulls30 = 0, somaIdades = 0;
const cont = [];


while (continuar) {
    idade = leia.questionInt("\nDigite a sua idade: ");
    genero = leia.questionInt("\n1 - Mulher Cis\n2 - Homem Cis\n3 - No Binario\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros" + "\nDigite o numero correspondente ao seu genero: ");
    especialidade = leia.questionInt("\n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack" + "\nDigite o numero correspondente a sua especialidade: ");
    total++;
    somaIdades += idade;
    cont.push({ idade });
    switch (genero) {
        case 1:
        case 4:
            mulher++;
            break;
        case 2:
        case 5:
            homem++
            break;
        case 3:
            naoBinario++
            break;
        case 6:
            outro++;
        default:
            console.log("Opcao Invalida!");
            break;
    }
    switch (especialidade) {
        case 1:
            back++
            break;
        case 2:
            front++;
            break;
        case 3:
            mobile++
            break;
        case 4:
            fulls++
            break;
        default:
            console.log("Opcao Invalida!");
            break;        
    }
if ((genero === 1 || genero === 4) && especialidade === 2) {
    mulherFront++;
}
if ((genero === 2 || genero === 5) && especialidade === 3 && idade > 40) {
    homemMobile40++;
}
if (genero === 3 && especialidade === 4 && idade < 30) {
    nbFulls30++;
}
if ((genero === 1 || genero === 4) && especialidade === 2) {
    mulherFront++;
}

if ((genero === 2 || genero === 5) && especialidade === 3 && idade > 40) {
    homemMobile40++;
}

if (genero === 3 && especialidade === 4 && idade < 30) {
    nbFull30++;
}

    continuar = leia.keyInYN("\nDeseja continuar a leitura dos dados de um novo colaborador?")
}
 console.log(`\nTotal de pessoas desenvolvedoras Backend: ${back}`);
console.log(`\nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherFront}`);
console.log(`\nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemMobile40}`);
console.log(`\nTotal de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nbFulls30}`);
console.log(`\nO número total de pessoas que responderam à pesquisa: ${total}`);
console.log(`\nA média de idade das pessoas que responderam à pesquisa: ${(somaIdades / total).toFixed(2)}`);