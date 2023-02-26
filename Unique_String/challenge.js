function uniqueString(str){
  const uniqueArray = []
  for(letter of str){
    if(uniqueArray.indexOf(letter) !== -1){
      return false
    }
    uniqueArray.push(letter)
  }
  return true
}



console.log(uniqueString('abcd'))
//true
console.log(uniqueString('abcdbed'))
// false
console.log(uniqueString('abdge'))
//true
