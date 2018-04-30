// JavaScript Iterators
// .forEach()
// countIntegers – counts how many integers there are in an array
// ex: countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript
// .map()
a2 = []
arr = [4, 2.2, 5, 6, 4.2, 8.2, 2,4];

var countIntegers = function(arr){
  arr.forEach(function(element){
    if (Number.isInteger(element)=== true){
      a2.push(element);
    }else{
      console.log("not integer"+element);
    }
  });
  return a2.length;
};
countIntegers(arr);

// Write code using .map() to have the following input and output:

// getSquares – takes in an array of numbers and returns an array of their squares
// ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]


arr = [1, 2, 3, 4, 5];
var getSquares = function(arr){
const map1 = arr.map(x => x * x);
return map1;
}
getSquares(arr);




arr = [1, 2, 3, 4, 5];
var getSquares = function(arr){
return  arr.map(function(number){
    return number ** 2
});
}
getSquares(arr);