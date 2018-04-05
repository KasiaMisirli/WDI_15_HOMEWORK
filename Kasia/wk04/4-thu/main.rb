require 'sinatra'
require 'sinatra/reloader' #changes in main.rb does not require a restart of the server
require 'pry'
require 'stock_quote'

get '/' do
   erb(:index)
end


get '/request' do
    @stock = StockQuote::Stock.quote(params[:company]).latest_price.to_s
    @name = StockQuote::Stock.quote(params[:company]).company_name.to_s
    erb(:index)
end