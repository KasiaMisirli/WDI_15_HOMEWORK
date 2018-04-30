document.getElementById("mybtn").addEventListener("click", function(){
    var input = document.getElementById("inp").value;
    document.getElementById("box").style.backgroundColor = input;
});

var input = document.getElementById("inp");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("mybtn").click();
  }
});