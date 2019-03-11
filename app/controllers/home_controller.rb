class HomeController < ApplicationController

  def index
  @posts = Post.all
  end
  def top
    @posts = Post.all
  end
def new
  @post = Post.new
end
  def create
    @post = Post.new(title: params[:title], content: params[:content])
    if @post.save
      flash[:notice] = "投稿が完了しました"
      redirect_to("/home/top")
    else
      render("home/top")
    end
  end

  def question

  end

  def mail

  end
end
