import leia from 'readline-sync';

let produto, preco, quantidade, valorTotal;

console.log("========MENU========");
console.log("1 - Cachorro Quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de Laranja");

produto = leia.questionInt("Escolha o produto de 1 a 6: ")
quantidade = leia.questionInt("Qual a quantidade?");


switch (produto) {
    case 1:
        valorTotal = quantidade * 10;
        console.log("\nProduto: Cachorro Quente");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    case 2:
        valorTotal = quantidade * 15;
        console.log("\nProduto: X-Salada");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    case 3:
        valorTotal = quantidade * 18;
        console.log("\nProduto: X-Bacon");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    case 4:
        valorTotal = quantidade * 12;
        console.log("\nProduto: Bauru");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    case 5:
        valorTotal = quantidade * 8;
        console.log("\nProduto: Refrigerante");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    case 6:
        valorTotal = quantidade * 13;
        console.log("\nProduto: Suco de Laranja");
        console.log(`\nValor total: R$${valorTotal}.00`);
        break;
    default:
        console.log("\nResposta Invalida!");
        break;
}