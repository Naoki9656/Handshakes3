Rails.application.routes.draw do
  get 'home/application'
  get 'users/index' => "users#index"
  get 'users/new'
  post 'users/create' => "users#create"
  get 'users/edit'
  get 'users/update'

  get "login" => "users#login_form"
  post 'users/login' => 'users#login'
  post"users/logout" => "users#logout"
  get "home/top" => "home#top"
  post "home/create" => "home#create"
  get 'community/top' =>"community#top"
  get 'community/conversation' =>"community#conversation"
  get 'users/new' => 'users#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "home/question" => "home#question"
  get "home/mail" => "home#mail"

  get 'home/index'
end
