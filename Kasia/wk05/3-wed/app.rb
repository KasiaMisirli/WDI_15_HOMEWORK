require 'pry'
require_relative "monkey"


# while (input != 'no')
#     print "what's your name? "
#     input = gets.chomp
#     monkeys.push(Monkey.new(input))
# end



print "Whats your name?:  "
name = gets.chomp
print "Whats species are you?:  "
species = gets.chomp
print "What did you eat today?: "
foods_eaten = gets.chomp
monkey = Monkey.new(name,species,foods_eaten)

print monkey.introduce



# monkeys = []
# input = ''

# print "what's your monkey's name? "
# name = gets.chomp
# print "Hi my name is #{name}"
# monkeys = Monkey.new(name)
# print "Whats your monkey's species?"
# species = gets.chomp
# name.species
# monkeys.push(Monkey.new(spacies))
# puts "what does #{name} eat?"
# food = eat(food)
# monkeys.push(Monkey.new(food))


# loop do
#     puts"any other food?"
#     more_food = gets.chomp
#     if more_food = 'yes'
#         puts"what else did you #{name} eat?"
#         food = gets.chomp
#         monkey.eat(food)
#     else
#         puts monkey.introduce
#         break
#     end
# end






