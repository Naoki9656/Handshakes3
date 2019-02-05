Rails.application.routes.draw do
  get "home/top" => "home#top"
  get 'community/top'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "home/question" => "home#question"
  get "home/mail" => "home#mail"

get 'home/index'
end
