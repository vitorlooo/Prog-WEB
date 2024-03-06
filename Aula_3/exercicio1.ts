function maiorValor(...lista: number[]): number {
    if (lista.length === 0) {
        return NaN;
    }

    let maior: number = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }

    return maior;
}

console.log(maiorValor(10, 5, 25, 35, 68, 16));
