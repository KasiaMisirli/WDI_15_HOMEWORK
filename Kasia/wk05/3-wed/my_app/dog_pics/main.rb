require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_query(sql)
  conn = PG.connect(dbname: 'dogs')
  result = conn.exec(sql)
  conn.close
  return result
end

get '/' do
  sql = 'SELECT * FROM dogs ORDER by id;'
  @dogs = run_query(sql)
  erb :index
end

get '/dogs/new' do 
  erb :new
end

post '/dogs' do 
  params["name"]
  sql = "INSERT INTO dogs (name,image_url) VALUES ('#{params[:name]}','#{params[:image_url]}');"
  run_query(sql)
  redirect to ('/')

end 


get '/dogs/:id' do
  sql = "SELECT * FROM dogs WHERE id = #{params[:id]};"
  results = run_query(sql)
  @dog = results.first
  erb :show
end

delete '/dogs' do
  sql = "DELETE FROM dogs WHERE id = #{params[:id]};"
  run_query(sql)
  redirect to ('/')
end

get '/dogs/:id/edit' do
    result = run_query("SELECT * FROM dogs WHERE id = #{params[:id]};")
    @dog = result.first
    erb :edit
end

put '/dogs/:id' do
  sql = "UPDATE dogs SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};"
  run_query(sql)
  redirect to ("/dogs/#{params[:id]}") 
end