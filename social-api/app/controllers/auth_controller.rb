class AuthController < ApplicationController
#   skip_before_action :authorized, only: [:create]

  def create

      @user = User.find_by(username: user_login_params[:username])

      if @user && @user.authenticate(user_login_params[:password])
          token = encode_token({ user_id: @user.id })
          
          render json: { user: UserSerializer.new(@user), jwt: token, yo: "hello world" }, status: :accepted
      else
          render json: { errors: ['Invalid username or password'] }, status: :unauthorized
      end
  end

  def auto_login
    if session_user
        render json: session_user
    else 
        render json: {errors: "No user is logged in. Make sure you're logged in."}
    end  
  end 

  def logged_in?
    !!session_user
  end

  private
  def user_login_params
      params.require(:user).permit(:username, :password)
  end
end 