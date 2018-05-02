Rails.application.routes.draw do
  get '/', to: 'pages#home'
  get '/new', to: 'games#new'
  post '/games', to: 'games#create'
  get '/answer', to: 'games#answer'

  get '/number/new', to: 'number#new'
  get '/win', to: 'number#win'
  get '/lose', to: 'number#lose'
end
