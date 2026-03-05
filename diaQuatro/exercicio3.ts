import readlinesync from "readline-sync";

const numero = new Set<number>();

for (let i = 0; i < 10; i++) {
    let num = readlinesync.questionInt("Digite 10 números: ");
    numero.add(num);
}

console.log("\nListar dados do Set: ")
let array = Array.from(numero);

array.sort((a, b) => a - b);
console.log(array.join("\n"));