require 'pry'
require_relative "monkey"


# while (input != 'no')
#     print "what's your name? "
#     input = gets.chomp
#     monkeys.push(Monkey.new(input))
# end

monkeys = []
input = ''

print "what's your monkey's name? "
name = gets.chomp
print "Hi my name is #{@name}"
print "Whats your monkey's species?"
@species = gets.chomp
@name.@species
monkeys.push(Monkey.new(name,species))

@name.eat('fruit salad')
@name.eat('banana milkshake')
@name.introduce