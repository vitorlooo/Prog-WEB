function somaNumerosPares(arr: number[]): number {
    let soma = 0;

    for (let numero of arr) {
        if (numero % 2 === 0) {
            soma += numero;
        }
    }

    return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = somaNumerosPares(numeros);

console.log(`Soma dos números pares: ${resultado}`);
