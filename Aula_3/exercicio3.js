"use strict";
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return NaN;
    }

    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;

    return media;
}


const conjunto1 = [10, 15, 20, 25];
const mediaConjunto1 = calcularMedia(conjunto1);
console.log(`Média do conjunto 1: ${mediaConjunto1}`);

const conjunto2 = [5, 7, 12, 18, 24];
const mediaConjunto2 = calcularMedia(conjunto2);
console.log(`Média do conjunto 2: ${mediaConjunto2}`);
