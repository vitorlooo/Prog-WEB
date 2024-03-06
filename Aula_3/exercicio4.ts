function converterParaCaixaAlta(texto: string): string {
    return texto.toUpperCase();
}

const texto1 = "João Vitor";
const resultado1 = converterParaCaixaAlta(texto1);
console.log(`Texto 1 em caixa alta: ${resultado1}`);

const texto2 = "Santos Futebol Clube";
const resultado2 = converterParaCaixaAlta(texto2);
console.log(`Texto 2 em caixa alta: ${resultado2}`);
