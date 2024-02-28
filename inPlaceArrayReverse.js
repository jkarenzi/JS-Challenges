function inPlaceArrayReverser(arr) {
    let arrLength = arr.length
    for(let i=0; i < arrLength; i++){
        let lastItem = arr[arr.length-1]
        arr.splice(arrLength-1,1)
        arr.splice(i,0, lastItem)
    }
    return arr
}

console.log(inPlaceArrayReverser([1,2,3,4]))