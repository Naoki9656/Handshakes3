class HomeController < ApplicationController
  def top
    @posts = Post.all
  end

  def question
    
  end
end
