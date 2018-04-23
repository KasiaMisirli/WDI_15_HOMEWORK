require_relative 'monkey'

print "Whats your name?:  "
name = gets.chomp
print "Whats species are you?:  "
species = gets.chomp
print "What did you eat today?: "
foods_eaten = gets.chomp
monkey = Monkey.new(name,species,foods_eaten)

print monkey.introduce