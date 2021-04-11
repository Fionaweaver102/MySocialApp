class SessionsController < ApplicationController

  def create 
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      cookies[:user_id] = user.id
      render json: {status: 200, logged_in: true, user: user, posts: current_user.posts}
    else 
      render json: { errors: ['Invalid username or password'], status: 401}
    end 
  end 

  def destroy 
    cookies[:user_id] = nil
    render json: {status 200, message: "Logged out successfully"}
  end 
  
end 