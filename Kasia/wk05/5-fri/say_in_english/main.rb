require_relative 'say'
require 'pry'

print "What number would you like spelled out?:  "
number = gets.chomp.to_i
p Say.new(number).in_english