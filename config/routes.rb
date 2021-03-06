Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  get '/me', to: 'users#show'
  get '/reviews/users/:id', to: 'reviews#user_show'
  get '/reviews/cocktails/:id', to: 'reviews#cocktail_show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :reviews
  resources :cocktails
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
