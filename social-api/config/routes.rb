Rails.application.routes.draw do
  resources :posts, only: [:index, :create, :destroy] 
  resources :users, only: [:show, :create, :destroy, :update] 

  post '/login', to: 'auth#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
