class ApplicationController < ActionController::Base

  before_action :set_search
  before_action :set_current_user

  def set_search
    #@search = Article.search(params[:q])
    @search = Post.ransack(params[:q]) #ransackメソッド推奨
    @search_posts = @search.result
  end
  def authenticate_user
    if @current_user == nil
      flash[:notice] = "ログインが必要です"
      redirect_to("/home/top")
    end
  end

  #ストロングパラメーター
  def user_params
    params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :image, :introduce, :age, :sex, :address)
  end

   def set_current_user
     @current_user = User.find_by(id: session[:user_id])
  end


end
