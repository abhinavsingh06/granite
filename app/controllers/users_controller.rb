class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # Creating user active record object from params
    @user = User.new(user_params)
    # If user save in the db is successful
    if @user.save
      flash[:success] = 'Account created successfully!'
      render status: :ok, json: { notice: 'Account created successfully!' }
    else
      render status: :unprocessable_entity, json: { errors: @user.errors.full_messages}
    end
  end

  private
  
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
