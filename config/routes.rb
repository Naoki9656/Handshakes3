Rails.application.routes.draw do
  get 'users/index' => "users#index"
  get 'users/new'
  post 'users/create' => "users#create"
  get 'users/edit'
  get 'users/update'
  get "home/top" => "home#top"
  post "home/create" => "home#create"
  get 'community/top' =>"community#top"
  get 'community/conversation' =>"community#conversation"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "home/question" => "home#question"
  get "home/mail" => "home#mail"

  get 'home/index'
end
