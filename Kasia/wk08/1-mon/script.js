document.getElementById("mybtn").addEventListener("click", function(){
    event.preventDefault()
    var input = document.getElementById("inp");
    document.getElementById("box").style.backgroundColor = input.value;
});


// input.addEventListener("keyup", function(event) {
  //   event.preventDefault();
  //   if (event.keyCode === 13) {
    //     document.getElementById("mybtn").click();
    //   }
    // });
    
var fun = function(event){
  var boxColor = document.getElementById("box").style.backgroundColor;
  // var divs = document.querySelector(".square").addEventListener("click", function(){
  event.target.style.backgroundColor = boxColor;
};

for (var i = 0; i < 1000; i++){
  var $square = $('<div>').addClass('square')
  $square.hover(fun)
  $("#cont").append($square);
  // $("#cont").append("<div onclick='fun(event)' class='square'>");
}


//   var options = {
//     url: "http://www.omdbapi.com/?t=jaws&apikey=2f6435d9",
//     method: "get"
// }
// $.ajax(options).done(function(res){
//   res.forEach(function(dish){
//       console.log(dish.name);
//       var $p = $('<p>');
//       $p.text(dish.name)
//       $("main").append($p)
//   })
// })


// $(".square div").click(function() {
//     $(this).backgroundColor=input;
// });


