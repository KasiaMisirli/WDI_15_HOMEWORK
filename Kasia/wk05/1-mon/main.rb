require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


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
    erb(:options)
end

get '/movie_info' do
    result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params["movie_name"]}")
    @mov = result.parsed_response["Title"].to_s 
    @year = result.parsed_response["Year"].to_s
    @poster = result.parsed_response["Poster"]
    erb (:movie)
end
