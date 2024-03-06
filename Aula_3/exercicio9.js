function somaNumerosPares(arr) {
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
        var numero = arr[i];
        if (numero % 2 === 0) {
            soma += numero;
        }
    }
    return soma;
}
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = somaNumerosPares(numeros);
console.log("Soma dos n\u00FAmeros pares: ".concat(resultado));
