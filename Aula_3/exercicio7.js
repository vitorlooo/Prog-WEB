function calcularAcrescimoPorcentagem(valor, porcentagem) {
    var acrescimo = (valor * porcentagem) / 100;
    return valor + acrescimo;
}
var valorOriginal = 100;
var porcentagemAcrescimo = 20;
var novoValor = calcularAcrescimoPorcentagem(valorOriginal, porcentagemAcrescimo);
console.log("Novo valor ap\u00F3s acr\u00E9scimo: ".concat(novoValor));
