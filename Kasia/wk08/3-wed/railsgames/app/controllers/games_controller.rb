class GamesController < ApplicationController

    def new
    end
    def create
         redirect_to '/answer'
    end
end