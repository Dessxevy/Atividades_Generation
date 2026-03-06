import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();

let opcao, lista, add = "", continuar;

do {
    console.log("\n\n\n**********************************");
    console.log("1 - Adicionar um novo Cliente na fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");
    console.log("**********************************");
    opcao = readlinesync.questionInt("\nDigite a sua opção: ");
    switch (opcao) {
        case 1:
            add = readlinesync.question("Digite o nome que deseja adicionar: ")
            fila.enqueue(add);
            console.log("\nCliente Adicionado!");
            break;
        case 2:
            console.log("\nLista de Clientes na Fila: ")
            fila.printQueue();
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!")
            } else if (fila.dequeue()) {
                console.log("O Cliente foi Chamado!")
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