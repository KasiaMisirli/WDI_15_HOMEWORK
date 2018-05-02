
Rails.application.routes.draw do

  get '/dogs/new', to: 'dogs#new'
  post '/dogs', to: 'dogs#create'
  get '/dogs/:id', to: 'dogs#show'
  delete '/dogs/:id', to: 'dogs#destroy'
  get '/dogs/:id/edit', to: 'dogs#edit'
  get '/dogs', to: 'dogs#index'
  put '/dogs/:id', to: 'dogs#update'
  
  get '/about', to: 'pages#about_us'
  get '/', to: 'pages#home' #pages_controllers home method pages/home.html.erb

  get '/login', to: 'session#new'
  # post '/login', to: ''
  post '/session', to: 'session#create' #dont need a file. redirect
  delete '/session', to: 'session#destroy' #dont need a file. redirect

end
