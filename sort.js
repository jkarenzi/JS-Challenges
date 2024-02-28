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

function sort(arr) {    
    let biggest = arr[0]
    let sorted = []

    while(arr.length > 0){
        biggest = arr[0]
        for(let item of arr){
            
            if(item > biggest) {
                biggest = item
            }
        }
        sorted.push(biggest)
        arr.splice(arr.indexOf(biggest),1)
    }

    let primeArr = primeNumbers(sorted)
    return sorted.filter((num) => !primeArr.includes(num))
}


console.log(sort([1,2,3,4,5,6,7,8,9,10]))

