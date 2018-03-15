/*
The Recipe Card
Never forget another recipe!

Create an object to hold information on your 
favorite recipe. It should have properties for title 
(a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the 
recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

*/


var favRecipe = {
    title: "Mole",
    serves: 2,
    ingredients: ["Cinnamon", "Cumin", "Cocoa"]
}
console.log(favRecipe.title);
console.log("Serves:2");
console.log("Ingredients:");
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);

//_____________________________________________________________

/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has
 properties for the title (a string), author (a string), and alreadyRead 
 (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title 
and book author like so: "The Hobbit by J.R.R. Tolkien". 

Now use an if/else 
statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. 
Tolkien', and if not, log a string like 'You still need to read "The Lord 
of the Rings" by J.R.R. Tolkien.'

*/
var book1 = {
    title: "It",
    author: "Stephen King",
    alreadyRead: true
};
var book2 = {
    title: "Twilight",
    author: "Stehenie Meyer",
    alreadyRead: false
};
var book3 = {
    title: "Harry Potter",
    author: "J.K.Rowling",
    alreadyRead: false
};
var myBooks = [book1,book2,book3];

//the objects must be specified before they go into array

for(var i=0; i<myBooks.length; i++){
    console.log(myBooks[i].title +" by "+ myBooks[i].author); 
    if(myBooks[i].alreadyRead === true){
        console.log("Your already read "+myBooks[i].title+" by "+myBooks[i].author);
    }  else{
        console.log("You still need to red "+myBooks[i].title+" by "+myBooks[i].author);
    }
}



//_________________________________________________________________________

/*
The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite 
movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living 
Sneezes."

*/

var myFavoriteMovie = {
    title: "It",
    duration: 120,
    stars: ["Pennywise","Charlie","Tom"]
}
//for(var i=0; i<myFavoriteMovie.stars.length;i++){
console.log(myFavoriteMovie.title+" lasts for "+myFavoriteMovie.duration+" minutes. Stars: "+myFavoriteMovie.stars);
//}


