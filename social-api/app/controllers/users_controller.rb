class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index 
    user = User.all

    render json: User.arr_to_json
  end 
  # GET /users/1
  def show
    render json: user
  end

  # POST /users
  def create
    user = User.new(user_params)

    if user.save
      cookies[:user_id] = user.id
      
      render json: {status: 200, user: user}
    else
      render json: {status: 501, message: user.errors.full_messages}
    end
  end

  def logged_in 
    if current_user
      render json: {logged_in: true, user: current_user}
    else 
      render json: {logged_in: false}
    end 
  end 

  # PATCH/PUT /users/1
  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:firstName, :lastName, :gender, :username, :password_digest, :email, :phone, :birthday)
    end
end
