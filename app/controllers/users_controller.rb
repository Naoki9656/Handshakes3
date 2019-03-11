class UsersController < ApplicationController
  def index
    @search = User.search(params[:q])
    @users = @search.result
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.save
      flash[:notice] = "ユーザー登録が完了しました"
      redirect_to("/home/top")
    else
      render("home/top")
    end
  end

  def edit
  end

  def update
  end
end
