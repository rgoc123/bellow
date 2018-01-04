Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :create]
  end

  root "static_pages#root"
end
