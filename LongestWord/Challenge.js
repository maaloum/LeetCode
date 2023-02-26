function longestWord(str){
  const words = str.split(' ')
  let longestWord = ' '
  words.forEach(word =>{
    if(word.length > longestWord.length){
      longestWord = word
    }
  }
    );
  return longestWord;
}

console.log(longestWord("I win this mysterious game"));
// mysterious
console.log(longestWord("University is where people go for knowldge"))
// University
