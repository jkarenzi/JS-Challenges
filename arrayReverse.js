function arrayReverser(arr) {
    let arrLength = arr.length
    for(let i=0; i < arrLength; i++) {
        let last = arr[arr.length-1]
        arr.splice(arrLength-1,1)
        arr.splice(i,0,last)
    }
    return arr
}

console.log(arrayReverser([10,12,14,16,18]))