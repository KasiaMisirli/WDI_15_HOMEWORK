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

var fun = function(event){
  // var divs = document.querySelector(".square").addEventListener("click", function(){
    event.target.style.backgroundColor = input.value;
  };

for (var i = 0; i < 1000; i++){
  var $square = $('<div>').addClass('square')
  $square.hover(fun)
  $("#cont").append($square);
  // $("#cont").append("<div onclick='fun(event)' class='square'>");
  }




// $(".square div").click(function() {
//     $(this).backgroundColor=input;
// });


