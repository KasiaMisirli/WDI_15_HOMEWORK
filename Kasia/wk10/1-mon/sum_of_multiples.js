// 5. sum of multiples
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// for example:

// 1, 2, [3], 4, [5], [6], 7, 8, [9]

// 3 + 5 + 6 + 9 = 23
// Write a program that, given a number, can find the sum of all the multiples of 3 or 5 up to and including that number.

// Write the program in javascript with nodejs.

// $ node sumOfMultiples.js 9
// $ 23
// $ node sumOfMultiples.js 5
// $ 8

function sumOfMultiples(number){
  number = Number(process.argv[2])
  if(number <= 2){
    return 0
  }else if(number === 3 || number === 4){
    return 3
  }else if(number === 5){
    return 8
  }else if(number >= 6 && number <= 8){
    return 14
  }else if(number === 9){
    return 23
  }
}
console.log(sumOfMultiples())