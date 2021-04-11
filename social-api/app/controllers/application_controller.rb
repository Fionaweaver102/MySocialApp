class ApplicationController < ActionController::API
  include ActionController::Cookies 

  def current_user
    @current_user = User.find_by(id: cookies[:user_id])
  end 

  def logged_in?
    !!current_user
  end 

  def authorized
    render json: { message: 'Please log in', status: 403 } unless logged_in?
  end
  
end
