// return first word with greatest number of repeated letters

function countLetter(str){
    // split string into an array
    const splitStr = str.split(' ');
    // loop the array to treat each element
   const temp =  splitStr.map(element => {
         let splitElement = element.toLowerCase().split('')
        return splitElement;
    });
    // return temp
}



console.log(countLetter("Javascript is the greatest programming language"))
// 