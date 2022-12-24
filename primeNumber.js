function primeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "not a prime number"
        }
        else{
            return "is a prime number"
        }
        
    }

}
console.log(primeNumber(128));