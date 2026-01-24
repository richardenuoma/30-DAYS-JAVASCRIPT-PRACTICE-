function isPrime(number){
    if(number < 2) return false;
    for(let i = 0; i * i <= number; i++){
        if(number % 1 == 0 && number % number == 0){
            return true;
        }  
        return false;
    }
}

console.log(isPrime(2))