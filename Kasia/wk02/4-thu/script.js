console.log("break the bank!");

var savDepositBtn = document.querySelector(".sav-dep");
var savWithBtn= document.querySelector(".sav-wit");
var savInput = document.querySelector(".sav-inp")
var resultSpan =document.querySelector(".dispNumb") 
var balance = 0;



var deposit = function(){
    balance += Number(savInput.value);
    console.log(balance);
    document.getElementById("total").innerHTML = "$ "+balance;
}

savDepositBtn.addEventListener("click",deposit);

var withdraw = function(){
    balance = balance - Number(savInput.value);
    console.log(balance);
    var outcome = document.querySelector(".dispNumb").innerHTML;
    document.getElementById("total").innerHTML = "$ "+balance;
  
}
savWithBtn.addEventListener("click",withdraw);


var checkDepositBtn= document.querySelector(".chec-dep");
var checkWithBtn = document.querySelector(".chec-wit");
var checkInput = document.querySelector(".chec-inp");
var resultSpanWith = document.querySelector(".dispNumb2");
var witBalance = 0;

var deposit2 = function(){
   witBalance +=Number(checkInput.value);
   document.getElementById("total2").innerHTML = "$ "+ witBalance;
}

checkDepositBtn.addEventListener("click", deposit2);

var withdrawChecking = function(){
    witBalance = witBalance - Number(checkInput.value);
    var outcome2 = document.querySelector(".dispNumb2").innerHTML;
    document.getElementById("total2").innerHTML = "$ "+witBalance;
}
checkWithBtn.addEventListener("click",withdrawChecking);