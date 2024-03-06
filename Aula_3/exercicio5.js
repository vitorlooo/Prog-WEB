function ehPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(ehPrimo(3));
console.log(ehPrimo(6));
console.log(ehPrimo(13));
console.log(ehPrimo(16));
