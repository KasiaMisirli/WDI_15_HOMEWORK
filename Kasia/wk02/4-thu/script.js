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
    
    if(balance - Number(savInput.value)<0){
        //console.log("balance"+balance);
        //document.getElementById("total").innerHTML = "Transaction denied. Please enter new amount.";
     alert("Transaction denied. Please enter new amount.");
    
      //document.querySelector(".savings").style.backgroundImage ="none";
       //document.querySelector(".savings").style.backgroundColor ="red";
       //document.querySelector(".savings").style.backgroundColor = "rgba(255, 0, 0, 0)";
    }else{
        
        balance = balance - Number(savInput.value);
        var outcome = document.querySelector(".dispNumb").innerHTML;
        document.getElementById("total").innerHTML = "$ "+balance;
    }
    //console.log(balance);
    // if(balance<=0){
    //     console.log("not enough money!");
    //     var bac= document.querySelector(".savings");
    //     bac.style.backgroundColor="red";
    //     }
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
    if(witBalance - Number(checkInput.value)<0){
        alert("Transaction denied. Please enter new amount.");
    }else{
        witBalance = witBalance - Number(checkInput.value);
        var outcome2 = document.querySelector(".dispNumb2").innerHTML;
        document.getElementById("total2").innerHTML = "$ "+witBalance;
    }
}
checkWithBtn.addEventListener("click",withdrawChecking);


//change the image to be invisible when on 0.
//visible when about 0