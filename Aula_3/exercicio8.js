function reverteString(texto) {
    var separa = texto.split("");
    var junta = separa.reverse().join("");
    return junta;
}
console.log(reverteString('JOAO'));
