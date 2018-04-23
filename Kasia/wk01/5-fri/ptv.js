console.log("ptv!");


var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong","Tooronga"];
var sandringhamLine =  ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];


var origin = "Souther Cross";
var destination = "Prahran";

var ifThisLine = alameinLine.indexOf(origin);
var ifThisLine2 = glenWaverlyLine.indexOf(origin);
var ifThisLine3 = sandringhamLine.indexOf(origin);
//console.log(ifThisLine);
if(ifThisLine !== -1){
    var originLine = alameinLine;
}else if(ifThisLine2 !== -1){
     originLine = glenWaverlyLine;
} else if ( ifThisLine3 !== -1){
    originLine= sandringhamLine
}else {
   console.log("this is not the line")
}
console.log(originLine);

var ifThisLineA = alameinLine.indexOf(destination);
var ifThisLineB = glenWaverlyLine.indexOf(destination);
var ifThisLineC = sandringhamLine.indexOf(destination);
//console.log(ifThisLine);
if(ifThisLineA !== -1){
    var destinationLine = alameinLine;
}else if(ifThisLineB !== -1){
     destinationLine = glenWaverlyLine;
} else if ( ifThisLineC !== -1){
    destinationLine= sandringhamLine
}else {
   console.log("this is not the line")
}
console.log(destinationLine);

var originalIndexOfOrigin=originLine.indexOf(origin);
var originalIndexOfDestination = destinationLine.indexOf(destination);
if (originLine.indexOf(origin)>destinationLine.indexOf(destination)){
    var reversedOrigin=originLine.reverse();
}
else{
    var correctOrigin = originLine;
}
console.log(reversedOrigin);
 //console.log(originLine.indexOf(origin));
 //console.log(destinationLine.indexOf(destination));
var orgNewIndex = reversedOrigin.indexOf(origin);
var desNewIndex = reversedOrigin.indexOf(destination);
console.log(orgNewIndex);
console.log(desNewIndex);

var firstTrip = reversedOrigin.slice(orgNewIndex,desNewIndex+1);
console.log(firstTrip);
// below code for if the line doesnt have to be reversed

var firstTrip2 = originLine.slice(originalIndexOfOrigin,originalIndexOfDestination+1);
console.log(firstTrip2);




//console.log(originLine.indexOf(origin));
//console.log(destinationLine.indexOf(destination));


// var stationsForOriginToDestination = [];
// for(var i=0;i<originLine.length;i++){

//     if()
//     stationsForOriginToDestination.push()
// }
