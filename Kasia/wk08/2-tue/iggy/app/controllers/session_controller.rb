class SessionController < ApplicationController
    def new

    end
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to '/'
        else
            render :new
        end
    end

    def destroy
        session = Session.find(params[:id])
        session.destroy
        redirect_to '/'
    end

end