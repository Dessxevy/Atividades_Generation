import leia from 'readline-sync';

let animal, tipo, alimentacao;

animal = leia.question("O animal e vertebrado ou invertebrado?");

if (animal === "vertebrado") {
    tipo = leia.question("O animal e uma ave ou um mamifero?");

    if (tipo === "ave") {
        alimentacao = leia.question("O animal e carnivoro ou onivoro?");

        if (alimentacao === "carnivoro") {
            console.log("O animal e uma Aguia!");
        } else if (alimentacao === "onivoro") {
            console.log("O animal e uma Pomba!");
        } else {
            console.log("Resposta invalida!");
        }

    } else if (tipo === "mamifero") {
        alimentacao = leia.question("O animal e herbivoro ou onivoro?");

        if (alimentacao === "onivoro") {
            console.log("Homem!");
        } else if (alimentacao === "herbivoro") {
            console.log("O animal e uma Vaca!");
        } else {
            console.log("Resposta invalida!");
        }

    } 
    
} else if (animal === "invertebrado") {
        tipo = leia.question("O animal e um inseto ou um anelideo?");

        if (tipo === "inseto") {
            alimentacao = leia.question("O animal e hematofago ou herbivoro?");

            if (alimentacao === "hematofago") {
                console.log("O animal e uma Pulga!");
            } else if (alimentacao === "herbivoro") {
                console.log("O animal e uma Lagarta!");
            } else {
                console.log("Resposta invalida!");
            }

        } else if (tipo === "anelideo") {
            alimentacao = leia.question("O animal e hematofago ou onivoro?")

            if (alimentacao === "onivoro") {
                console.log("O animal é uma Minhoca!");
            } else if (alimentacao === "hematofago") {
                console.log("O animal e uma Sanguessuga!");
            } else {
                console.log("Resposta invalida!");
            }

        }
    } else {
    console.log("Resposta invalida!");
}