const arr = [1, 2, 3, 4, 5, 6];
function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
      oddCount++;
    }
  }
    
  return { even: evenCount, odd: oddCount };
}
 
const counts = countEvenOdd(arr);

console.log(counts.even); 
console.log(counts.odd); 
