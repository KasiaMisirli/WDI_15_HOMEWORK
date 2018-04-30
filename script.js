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
$( ".square" ).append( "<body></body>" );


var fun = function(){}
    var divs = document.getElementById("cont").addEventListener("click", function(){
    event.target.style.backgroundColor = input.value;
});

// $(".square div").click(function() {
//     $(this).backgroundColor=input;
// });
