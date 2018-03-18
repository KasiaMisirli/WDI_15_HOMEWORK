
var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong","Tooronga"];
var sandringhamLine =  ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var flag1=false;
var flag2=false;
var origin="";
var destination = "";
//request origin and data validation for origin
do{
    origin = prompt("please enter your origin");
    if (origin.indexOf(" ")<0){
        origin= origin.charAt(0).toUpperCase()+origin.substring(1,origin.length).toLocaleLowerCase();
    }else{
        var space = origin.indexOf(" ");
        origin= origin.charAt(0).toUpperCase()+
        origin.substring(1,space).toLocaleLowerCase()+" "+
        origin.charAt(space+1).toUpperCase()+
        origin.substring(space+2,origin.length);
    }  
    if (alameinLine.indexOf(origin)===-1 && glenWaverlyLine.indexOf(origin)===-1 && sandringhamLine.indexOf(origin)===-1){
        flag1 = true;
    } else{
        flag1 = false;
    }
}while(flag1);  
// request destination and data validation for destination
do{
    destination = prompt("please enter your destination");
    if (destination.indexOf(" ")===-1){
        destination= destination.charAt(0).toUpperCase()+destination.substring(1,destination.length).toLocaleLowerCase();
    }else{
        var space2 = destination.indexOf(" ");
        destination= destination.charAt(0).toUpperCase()+
            destination.substring(1,space2).toLocaleLowerCase()+" "+
            destination.charAt(space2+1).toUpperCase()+
            destination.substring(space2+2,destination.length);
    }  
    if (alameinLine.indexOf(destination)=== -1 && glenWaverlyLine.indexOf(destination)===-1&&sandringhamLine.indexOf(destination)===-1){
        flag2 = true;
    } else{
        flag2 = false;
    }
}while(flag2);

// find which line origin is on 
var originLine;
if (origin !== "Richmond"){
    if (alameinLine.indexOf(origin) !== -1 ){
        originLine = alameinLine;
    }else if (glenWaverlyLine.indexOf(origin) !== -1){
        originLine = glenWaverlyLine;
    } else if (sandringhamLine.indexOf(origin)!== -1){
        originLine= sandringhamLine
    }else {
    console.log("this is not the line")
    }
}
// find which line destination is on
var destinationLine;
if (destination !== "Richmond"){
    if (alameinLine.indexOf(destination) !== -1){
        destinationLine = alameinLine;
    }else if (glenWaverlyLine.indexOf(destination) !== -1){
        destinationLine = glenWaverlyLine;
    } else if (sandringhamLine.indexOf(destination) !== -1){
        destinationLine= sandringhamLine
    }else {
    console.log("this is not the line")
    } 
}
// above doesnt apply if Richmond is either origin or destination, 
// if thats the case, assign the line of the other var
var trip = [];
if (origin === "Richmond"){
    originLine = destinationLine;
    trip.push("Richmond");
}else if (destination === "Richmond"){
    destinationLine = originLine
}
// checking the index of origin and destination

var originIndex = originLine.indexOf(origin);
var richmondIndexOriginLine = originLine.indexOf("Richmond");

var destinationIndex = destinationLine.indexOf(destination);
var richmondIndexDestLine = destinationLine.indexOf("Richmond");
// if index of origin is lower then index of Richmond
//slice array between origin and Richmond 

if (originIndex<richmondIndexOriginLine){
    var section = originLine.slice(originIndex,richmondIndexOriginLine+1);
    for (var i =0;i<section.length;i++){
        trip.push(section[i]);
    }
}
// if index of origin is higher then index of Richmond
//slice array between origin and Richmond 
if (originIndex>richmondIndexOriginLine){
    var section = originLine.slice(richmondIndexOriginLine,originIndex+1).reverse();
    for (var i =0;i<section.length;i++){
        trip.push(section[i]);
    }
}

// if index of destination is lower then index of Richmond
//slice array between destination and Richmond and reverse
if (destinationIndex<richmondIndexDestLine){
    var section = destinationLine.slice(destinationIndex,richmondIndexDestLine).reverse();
    for (var i =0;i<section.length;i++){
        trip.push(section[i]);
    }
}

// if index of destination is higher then index of Richmond
//slice array between Richmond and destination
if (destinationIndex>richmondIndexDestLine){
    var section = destinationLine.slice(richmondIndexDestLine+1,destinationIndex+1);
    for (var i =0;i<section.length;i++){
        trip.push(section[i]);
    }
}
// below code will be executed if origin and destination line is the same
if (originLine === destinationLine){
    if (originIndex>destinationIndex){
        var singleLine = originLine.slice(destinationIndex,originIndex+1).reverse();
    }else{
        var singleLine = originLine.slice(originIndex,destinationIndex+1);
    }
    if (singleLine.indexOf("Richmond")=== -1){
        trip=  singleLine;
    }
}

var stationNumber = (trip.length)-1;
//console.log(stationNumber);
var tripArray = trip.join(" ------> ");
//console.log(tripArray);

if (stationNumber>=2){
    console.log("origin: "+origin+"\n"+"destination: "+destination+"\n\n"+
tripArray+"\n\n"+stationNumber+" stops total");
}else{
    console.log("origin: "+origin+"\n"+"destination: "+destination+"\n\n"+
tripArray+"\n\n"+stationNumber+" stop total");
}
