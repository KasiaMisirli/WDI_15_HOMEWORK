#this is for testing my db
require 'pry'
require 'active_record'
ActiveRecord::Base.logger = Logger.new(STDERR) #log sql for me
require_relative 'db_config'
require_relative 'models/movie' #looking for the class file
 
binding.pry