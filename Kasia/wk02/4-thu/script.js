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