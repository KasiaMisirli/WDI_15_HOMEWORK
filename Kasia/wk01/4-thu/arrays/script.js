// 1. Create an array of the days of the week
// Create a variable named days_of_the_week as an array of the following:
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. 
//Use array methods.
// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days
// 4. Remove either the weekdays or the weekends
// Your choice...
// 5. Sort the remaining days alphabetically
//1:
var days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//2:
days_of_the_week.unshift(days_of_the_week[6]);
days_of_the_week.pop();
//3:
var days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var weekend= days_of_the_week.slice(5);
console.log(weekend);
days_of_the_week.pop();
days_of_the_week.pop();
var weekdays= days_of_the_week;
console.log(weekdays);
var twoArrays = [];
twoArrays.push(weekdays);
twoArrays.push(weekend);
console.log(twoArrays);
//4:
var remainingArray= twoArrays.pop();
console.log(remainingArray);
console.log(twoArrays);
//5:
var sorted= weekdays.sort();
console.log(sorted);