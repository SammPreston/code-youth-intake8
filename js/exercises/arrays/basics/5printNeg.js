const arr = [1, -2, 3, -4, 5, -6];
function printNegativeElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        console.log(arr[i]);
      }
    }
  }
printNegativeElements(arr); 
