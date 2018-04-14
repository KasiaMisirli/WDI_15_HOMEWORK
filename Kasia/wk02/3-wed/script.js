// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

function combineWords(word1, word2) {
	return word1 + word2;
}
combineWords('dog', 'house');

// displays 'doghouse'

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function(birth_year, current_year){
    age = current_year - birth_year;
    return "You are either "+ age +" or "+(age+1);
}
calculateAge(1997,2018)
calculateAge(1999,2018)
calculateAge(1980,2018)

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
arr = ["kasia","blue"]
var lengths = function(arr){
    for(var i = 0;i<arr.length;i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
console.log(lengths(arr));
// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(num1,num2,num3){
    var result = Math.pow(num1*num2,num3);
    return result;
}
console.log(transmogrifier(2,3,2));
// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

var wordReverse = function(str){
    var newString = str.split(' ').reverse().join(' ');
    return newString;
}
console.log(wordReverse("This is too easy"));