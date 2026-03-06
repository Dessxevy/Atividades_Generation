import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let opcao, lista, add = "", continuar;

do {
    console.log("\n\n**********************************");
    console.log("1 - Adicionar livro na pilha");
    console.log("2 - Listar todos os livros");
    console.log("3 - Retirar livro da pilha");
    console.log("0 - Sair");
    console.log("**********************************");
    opcao = readlinesync.questionInt("\nEntre com a opção desejada: ");
    switch (opcao) {
        case 1:
            add = readlinesync.question("Digite o nome: ")
            pilha.push(add);
            console.log("\nLivro Adicionado!");
            break;
        case 2:
            console.log("\nLista de Livros na Pilha: ")
            pilha.printStack();
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!")
            } else if (pilha.pop()) {
                console.log("Um Livro foi retirado da pilha!")
            }
            break;
        default:
            console.log("Opção Inválida!");
            break;
    }
    continuar = readlinesync.keyInYNStrict("\nDeseja continuar?");

} while (opcao !== 0 && continuar == true) {
    console.log("Programa Finalizado!");
}

