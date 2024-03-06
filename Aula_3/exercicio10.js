function fatorial(n) {
    var fatorial = 1;
    for (var i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(fatorial(7));
console.log(fatorial(3));
console.log(fatorial(8));
console.log(fatorial(12));
