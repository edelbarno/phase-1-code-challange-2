function isPrime(num){
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(array) {
    return array.filter(isPrime);
    //filter prime numbers
}

let primeNumbers = filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);
