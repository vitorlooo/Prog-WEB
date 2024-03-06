function inverterArray(arr: any[]): any[] {
    return arr.slice().reverse();
}

const conjunto = ['a', 'b', 'c', 'd', 'e'];
const conjuntoInvertido = inverterArray(conjunto);

console.log('Conjunto invertido:', conjuntoInvertido);
