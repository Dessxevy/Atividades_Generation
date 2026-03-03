import leia from 'readline-sync';

let nome, cargo, reajuste, salario;

nome = leia.question("Digite o seu nome: ")
console.log("======CARGOS======");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Tecnico de TI");

cargo = leia.questionInt("\nDigite o numero correspondente ao seu cargo: ")
salario = leia.questionInt("\nQual o seu salario?");

let brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});


switch (cargo) {
    case 1:
        reajuste = salario + (10 * salario) / 100;
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Gerente");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    case 2:
        reajuste = salario + (7 * salario) / 100;
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Vendedor");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    case 3:
        reajuste = salario + (9 * salario) / 100;
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Supervisor");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    case 4:
        reajuste = salario + (6 * salario) / 100;
        console.log(`\nome do colaborador: ${nome}`);
        console.log("\nCargo: Motorista");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    case 5:
        reajuste = salario + (5 * salario) / 100;
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Estoquista");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    case 6:
        reajuste = salario + (8 * salario) / 100;
        console.log(`\nNome do colaborador: ${nome}`);
        console.log("\nCargo: Tecnico de TI");
        console.log(`\nNovo Salario: ${brl.format(reajuste)}`);
        break;
    default:
        console.log("\nResposta Invalida!");
        break;
}