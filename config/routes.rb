Rails.application.routes.draw do
  resources :tasks do
    resources :status, only: [:update]
    resources :comments, only: [:create]
  end

  root to: 'users#new'
  resources :users, only: [:new, :create]

  get '/login'     => 'sessions#new'
  post '/login'    => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
end
