// -- fix functions on this document by putting them into a temporary document --


let colours = ['red', 'green', 'blue', 'yellow', 'pink'];
for(let i = 0; i<colours.length; i++){
    console.log(i, colours[i]); // -- this will put the position of the element in the array, along with its value
}

for(let item of colours){
    console.log(item);
}// -- this displays the elements in the array

// -- below is a callback function 
// .. a call back function is a functiuon passed into another function as an argument
colors.forEach((ele)=> console.log("item", ele));
colors.forEach(print);
function print(ele){
    console.log("e", ele)
}
// -- ele is a callback because it is calling the function colors and adding to it

// -- array append methods example << https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0 >>

// ------------------further define--------------------------
// -- stack, queue (takes from the front and adds to the back)

let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

// -- push is adding the element to the end
colors.push("white");// -- This function can add more then one element at a time
console.log("push:", colors);

// -- pop is used to the last element from the array
let del = colors.pop();
console.log("pop", colors);
console.log("deleted elements", del);

// -- unshift is used to add elements at the beginning of the array
colors.unshift("black");
console.log("unshift", colors);

// -- .shift is used to delete elements from the beginning
del = colors.shift();
    console.log("shift", colors);

// -- add to any positon in array
    colors[3] = "aqua";
    console.log("change 3 place in array", colors);


    
// -- splice is used to add, remove, or replace elements from any position
    // -- splice(start_index,count_to_delete,add_element,add_element);
let splicedARR = colors.splice(2,1); // -- the first value defines the position of value, the second value defines the amount of elements this function is affecting
console.log("deleted splice", colors);
console.log("elements in the splicedARR function:", splicedARR);

// -- spliced to add element
splicedARR = colors.splice(3, 0, "abc", "def");
splicedARR = colors.splice(-1, 0, "rice"); // -- the -1 adds elements to the end
console.log("added spliced", colors);

// -- splice to replace elements
splicedARR = colors.splice(1,2, "dark green", "brown");
console.log("replaced slice:", colors);



// -- sort elements
colors.sort();
console.log("sorted array:", colors);

let arr = (45, 63, 78, 12, 19, 105);
arr.sort();
console.log("sorted numbers: ", arr);// -- this will sort the first number that is the smallest

// -- ascending sort
arr.sort(a ,b=> {return a-b})
console.log("ascending sort:", arr);

// -- descending sort
arr.sort(function(a,b){
    return b-a;
});
console.log("decending sort: ", arr);

// -- reverse elements
arr.reverse();
console.log("elements reversed: ", arr);


// -- .map effects all elements of the array
let newArr = arr.map((item)=> item/2);
let res = [];
for(i=0;i<arr.length;i++){
    res.push(arr[i]/2);
}
console.log("array res", res);
// -- console.log("map", newArr);
console.log("original array", arr);



// -- filter an array

let filteredArr = arr.filter((ele) => ele>50);
console.log("filtered array: ", filteredArr);

let colors = ['red', 'green', 'blue', 'yellow', 'pink'];

// -- find items in array
if(colors.includes('green')){
    console.log("green is here");
}

// -- format spacing between elements in array
let joinArr = (colors.join('+'));
console.log(joinArr);

// -- reduce
let arr = (45, 63, 78, 12, 19, 105);
console.log(arr);
// -- total+=current
let result = arr.reduce((total, current) => total+current,0);
console.log(result);