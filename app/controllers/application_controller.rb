class ApplicationController < ActionController::Base

  before_action :set_search

  def set_search
    #@search = Article.search(params[:q])
    @search = Post.ransack(params[:q]) #ransackメソッド推奨
    @search_posts = @search.result
  end
  private

  #ストロングパラメーター
  def user_params
    params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :image, :introduce, :age, :sex, :address)
  end
end
