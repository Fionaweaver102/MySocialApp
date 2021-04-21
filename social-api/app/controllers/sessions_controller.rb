class SessionsController < ApplicationController

    
  def login
    user = User.find_by(username: params[:username])
    
    if user && user.authenticate(params[:password])
        payload = {user_id: user.id}
        token = encode_token(payload)
        render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}
    else
        render json: {failure: "Your username or password is incorrect"}
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

  # def create 
  #   user = User.find_by(username: params[:username])
  #   if user && user.authenticate(params[:password])
  #     cookies[:user_id] = user.id
  #     render json: {status: 200, logged_in: true, user: user, posts: current_user.posts}
  #   else 
  #     render json: { errors: ['Invalid username or password'], status: 401}
  #   end 
  # end 

  # def destroy 
  #   cookies[:user_id] = nil
  #   render json: {status 200, message: "Logged out successfully"}
  # end 
  
end 