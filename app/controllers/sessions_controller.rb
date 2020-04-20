class SessionsController < ApplicationController

  def new
    render
  end

  def create
    user = User.find_by(email: params[:login][:email].downcase)
    # If user exist in DB run has_secure_password's .authenticate()
    if user && user.authenticate(params[:login][:password])
      # Save the user.id in session cookie if password correct:
      session[:user_id] = user.id.to_s
      flash[:success] = 'Successfully logged in!'
      
      render status: :ok, json: { notice: 'Successfully logged in!' }
    else
      # if email or password incorrect, re-render login page:
      render status: :not_found, json: { errors: ['Incorrect credentials, try again.'] }
    end
  end

  def destroy
    # remove saved user_id from the cookie:
    session.delete(:user_id)
    flash[:warning] = 'Logged out!'
  end
end
