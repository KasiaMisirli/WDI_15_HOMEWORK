class DogsController < ApplicationController
    def new
    end
    def create
        dog = Dog.new
        dog.name = params[:name]
        dog.description = params[:description]
        dog.user_id = User.first.id
        dog.save
        redirect_to "/dogs"
    end
    def show
        @dog = Dog.find(params[:id])
    end
    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
        redirect_to '/'
    end
    def edit
        @dog = Dog.find(params[:id])
    end
    def update
        dog = Dog.find(params[:id])
        dog.name = params[:name]
        dog.description = params[:description]
        dog.save
        redirect_to "/dogs/#{dog.id}"
    end
    def index
        @dogs = Dog.all
    end

end