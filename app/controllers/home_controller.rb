class HomeController < ApplicationController

  before_action :set_current_user


def application

end
  def index
  @posts = Post.all
  end
  def top
    @posts = Post.all
  end
def new
  @post = Post.new
  @whisper = Whisper.new
end
  def create
    @post = Post.new(
      title: params[:title],
      content: params[:content],
      user_id: @current_user.id
    )

    if @post.save
      @whisper = Whisper.new(
        user_id: @current_user.id,
        post_id: @post.id
      )
      @whisper.save
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
  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end

def list_index
  @posts_list = Post.find_by(user_id: @current_user.id)
  if @posts_list
    redirect_to("/home/list")
  else
    redirect_to("/home/top")
  end
end
def list
  @whispers = Whisper.find_by(user_id: @current_user.id)
  @posts = Post.find_by(id: @whispers.post_id)
  binding.pry
end
end
