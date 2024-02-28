function primeNumbers (arr) {
    let primeArr = []

    for(let num of arr){
        let isPrime = true;

        if(num <= 1){
            continue
        }

        for(let i=2; (i < num); i++){
            if(num % i === 0){
                isPrime = false
                break
            }
        }

        if(isPrime){
            primeArr.push(num)
        }   
    }
    
    return primeArr;
}

console.log(primeNumbers([7,8,9,10,11,12,13,14,15,16,17,18,19,20]))