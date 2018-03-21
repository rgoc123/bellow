Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:index, :create, :show] # do
      # resources :reviews, only: []
    #end
    resource :session, only: [:create, :destroy, :show]
    # resources :businesses, only: [:index, :show, :create]
    resources :reviews, only: [:index, :create, :show, :update, :destroy]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :edit, :update, :destroy]
    end
  end

  root "static_pages#root"
end
