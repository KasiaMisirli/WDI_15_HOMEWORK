
function addCity(city,backg) {
    var x = document.getElementById("city-type");
    var option = document.createElement("option");
    option.text = city;
    option.className = backg;
    option.id = city;
    option.addEventListener;
    x.add(option, x[0]);
}

addCity("NYC","nyc");
addCity("SF","sf");
addCity("LA","la");
addCity("SYD","sydney");
addCity("ATX","austin");

var select = document.getElementById('city-type');
select.onchange = function(event) {
    var city = event.target;
    if(city.value==="LA"){
        console.log("LA"); 
        document.body.style.backgroundImage = "url(images/la.jpg)";
    } else if(city.value==="NYC"){
        console.log("NYC"); 
        document.body.style.backgroundImage = "url(images/nyc.jpg)";
    } else if(city.value==="SYD"){
        console.log("SYD"); 
        document.body.style.backgroundImage = "url(images/sydney.jpg)";
    } else if(city.value ==="SF"){ 
        document.body.style.backgroundImage = "url(images/sf.jpg)";
    }else if(city.value === "ATX"){
        document.body.style.backgroundImage = "url(images/austin.jpg)";
    }
}
