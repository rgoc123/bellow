class Api::UsersController < ApplicationController
  def index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # if @user
    #   render 'api/users/show'
    # else
    #   render json: @user.errors.full_messages, status: 404
    # end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
