var reset = document.getElementById("reset")
var start = document.getElementById("start")
var pause = document.getElementById("pause")


reset.addEventListener("click", function(){
  console.log("reset clicked")
  reload()
});

start.addEventListener("click", function(){
  console.log("start clicked")
  updateTime()
});

pause.addEventListener("click", function(){
  console.log("pause clicked")
  pauseTime()
});
var seconds = 0
var timerId = 0
var time = 0

var newIntervalId = undefined;

function updateTime() {
  if(newIntervalId === undefined){
  newIntervalId = setInterval(timer,1000)
  }
}

function timer(){ 
    time += 1
    document.getElementById("timer").innerHTML = "Time elapsed: "+ time 
}

function pauseTime(){
  clearInterval(newIntervalId)
}

function reload(){
  window.location.reload(true);
}
