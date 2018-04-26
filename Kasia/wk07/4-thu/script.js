
var form = document.querySelector('.form');
var query = document.querySelector('.query')
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(query.input);
    var options={
    url:"http://api.giphy.com/v1/gifs/search?q="+query.value+"&api_key=FF09pHdbqHXj3f7K4RjHTNqvvpzL1SXF&limit=10"
    }
    var showResults = function(res){
        res.data.forEach(function(gif){
            var newElement = document.createElement('img')
            newElement.src=gif.images.original.url
            console.log(newElement);
            var resultsDiv=document.querySelector('.results');
            resultsDiv.appendChild(newElement);
            console.log(resultsDiv)
        });
    }
    $.ajax(options).done(showResults)
});
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        var options={
            url:"http://api.giphy.com/v1/gifs/search?q="+query.value+"&api_key=FF09pHdbqHXj3f7K4RjHTNqvvpzL1SXF&limit=10"
            }
            var showResults = function(res){
                res.data.forEach(function(gif){
                    var newElement = document.createElement('img')
                    newElement.src = gif.images.original.url
                    var resultsDiv = document.querySelector('.results');
                    resultsDiv.appendChild(newElement);
                });
            }
        $.ajax(options).done(showResults)
    }
});
