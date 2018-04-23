require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'



get '/' do
    erb(:index)
end

get '/about' do
    erb(:about)
end

get '/contact' do
    erb(:contact)
end 

get '/options' do
    if params[:movie_title] == ''
        redirect to ('/')
    end
    @multiple = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{params[:movie_title]}")
    if Movie.where(name: 'params[:movie_title]') 
        render @movie.title
        render @movie.year
        render @movie.image_url
    end
    erb(:options)
end

get '/movie_info' do
    result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params["movie_name"]}")
    @movie = Movie.new
    @movie.title = result.parsed_response["Title"].to_s 
    @movie.year = result.parsed_response["Year"].to_s
    @movie.image_url = result.parsed_response["Poster"]
    @movie.save

    erb (:movie)
end



@multiple = HTTParty.get("http://omdbapi.com/?apikey=#{ENV['OMDB_API_KEY']}&s=#{params[:movie_title]}")