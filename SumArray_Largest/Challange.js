function ArraySum(array){
    // write your code here
    // sort the array to find the largest element
    const ArrayTemp = array.sort((a,b) => a-b);
    // remove the largest element in the array
    const largest = ArrayTemp.pop();
    // calculate the sum of the rest of the array
    let sum = 0;
    ArrayTemp.forEach(element => {
        sum = sum +element; 
    });
    // check if the sum = the largest
    return sum === largest
};



console.log(ArraySum([1,2,4,6,13]));
// <!-- return true 1+2+4+6 = 13 -->
console.log(ArraySum([1,2,4,34,22]));
// <!-- return false 1+2+4+22 != 34 -->