import readlinesync from "readline-sync";

const array = new Array<string>(5);

for(let i = 0; i < array.length; i++){
    array[i] = readlinesync.question("Digite uma cor: ");
}

console.log("\nLista de cores: ")
console.log(array.join("\n"));

console.log("\nOrdenando as cores: ")
array.sort();
console.log(array.join("\n"));
