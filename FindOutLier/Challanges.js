
function findOutlier(integers){
  let even = [];
  let odd = []
  for (let i in integers){
    integers[i] % 2 ==0 ? even.push(integers[i]): odd.push(integers[i]);
  }
  return even.length === 1 ? even[0] : odd[0];
}



console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// 11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// 160

module.exports = findOutlier;
