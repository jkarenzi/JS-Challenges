function palindrome(str) {
    let reversedStr = str.split('').reverse().join("")

    if(str === reversedStr){
      return true;
    }else{
      return false
    }
}
  
console.log(palindrome("eye"));