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

get '/movie_info' do
    if params[:movie_title] == ''
        redirect to ('/')
    end
    result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params[:movie_title]}")
    @movie = result.parsed_response["Title"].to_s 
    @genre= result.parsed_response["Genre"].to_s
    @plot = result.parsed_response["Plot"].to_s
    @awards= result.parsed_response["Awards"].to_s
    @released = result.parsed_response["Released"].to_s
    @poster = result.parsed_response["Poster"]
    erb (:movie)
end

