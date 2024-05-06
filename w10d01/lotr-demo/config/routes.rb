Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # get 'profile', controller: 'users', action: :profile
  # get 'login', to: 'users#login'

  # resources :locations

  # resources :characters

  resources :locations do
    resources :characters # /locations/:id/characters
    resources :likes # /locations/:id/likes
  end

end
