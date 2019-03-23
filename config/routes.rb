Rails.application.routes.draw do
  get 'rooms/show'
  get 'home/application'
  get 'users/index' => "users#index"
  get 'users/new'
  post 'users/create' => "users#create"
  get 'users/edit'
  post 'users/update' => "users#update"

  get "login" => "users#login_form"
  post 'users/login' => 'users#login'
  post"users/logout" => "users#logout"
  get "home/top" => "home#top"
  get "home/list" => "home#list"
  get "home/not_login" => "home#not_login"
  post "home/create" => "home#create"
  post "home/:post_id/destroy" => "home#destroy"
  get 'community/top' =>"community#top"
  get 'community/conversation' =>"community#conversation"
  get 'users/new' => 'users#new'

  post "likes/:post_id/create" => "likes#create"
  post "likes/:post_id/destroy" => "likes#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "home/question" => "home#question"
  get "home/mail" => "home#mail"

  get 'home/index'



end
