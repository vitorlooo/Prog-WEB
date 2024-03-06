function calcularAcrescimoPorcentagem(valor: number, porcentagem: number): number {
    const acrescimo = (valor * porcentagem) / 100;
    return valor + acrescimo;
}

const valorOriginal = 100;
const porcentagemAcrescimo = 20;

const novoValor = calcularAcrescimoPorcentagem(valorOriginal, porcentagemAcrescimo);

console.log(`Novo valor após acréscimo: ${novoValor}`);
