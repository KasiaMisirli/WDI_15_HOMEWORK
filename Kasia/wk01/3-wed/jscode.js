for(var number = 0; number < 20; number++){
    if(number % 2== 0){
        console.log(number+" is even");
    }else if(number % 2 !== 0){
        console.log(number+ " is odd");
    }
}
//---------------------------------------------------------------------

for(var i = 0;i <= 10;i++){
    var result = i * 9;
    console.log(i + " * 9 = "+result);
}

for(var i = 0; i <= 10; i++){
    for (var j = 0; j <=10; j ++) {
      console.log(i + ' * ' + j + ' = ' + i*j);
    }
  }
//---------------------------------------------------------------------
//Create an array to hold your top choices
var number = 0;
var stNdRd;
var favPets = ['dogs','cats','fish'];
// For each choice log it to the screen
for (var i = 0; i < favPets.length; i++){
    console.log('My #' + (i + 1) + ' choice is ' + favPets[i]);
    }

//----------------------------------------------------------------------
var stNdRd;
var favPets = ['dogs', 'cats', 'fish'];
for (var i = 0; i < favPets.length; i++){
   
   if (i + 1 == 1) {
       stNdRd = 'st';
   } else if (i + 1 == 2) {
       stNdRd = 'nd';  
   } else if (i + 1 == 3) {
       stNdRd = 'rd';
   }
  
  console.log('My ' + (i + 1) + stNdRd + ' choice is ' + favPets[i]);
}