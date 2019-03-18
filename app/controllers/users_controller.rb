class UsersController < ApplicationController

  before_action :set_current_user

  def index
    @search = User.search(params[:q])
    @users = @search.result
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

        if params[:image]
          @user.image_name = "#{@user.email}.png"
          image = params[:image]
          File.binwrite("public/user_images/#{@user.image_name}",image.read)

        else
          @user.image_name ='no-image.png'
        end

        if @user.save
          flash[:notice] = "ユーザー登録が完了しました"
          redirect_to("/home/top")
        else
          flash[:notice] = "登録できませんでした"
          render("users/new")
        end
  end

  def edit
  end

  def update
  end

  def login_form
  end

  def login
      @user=User.find_by(email: params[:email],
                         password: params[:password])
      if @user
        session[:user_id] = @user.id
        flash[:notice] = "ログインしました"
        redirect_to("/home/top")
      else
        @error_message = "メールアドレスまたはパスワードが間違っています"
        render("home/top")
      end
  end

  def logout
      session[:user_id] = nil
      flash[:notice] = "ログアウトしました"
      redirect_to("/home/top")
  end

end
