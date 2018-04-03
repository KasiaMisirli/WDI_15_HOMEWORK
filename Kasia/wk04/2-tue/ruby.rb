# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
#---------------------
numbers between 0 and 100
secret = rand(0...101)
puts secret

puts "welcome to the guessing game"
print "Guess a number :"
guess = gets.chomp.to_i

loop do 
    print "guess a number: "
    guess = gets.chomp.to_i
    if guess == secret 
        break
    end
end

puts "congrats, you win!"

#----------
numbers between 0 and 10000
secret =  rand(0...10001)
puts secret

puts "welcome to the guessing game"
print "Guess a number :"
guess = gets.chomp.to_i

loop do 
    print "sorry, wrong number, guess again: "
    guess = gets.chomp.to_i
    if guess == secret 
        break
    elsif guess < secret
        puts "Wrong, guess higher!"
    elsif guess > secret
        puts "Wrong, guess lower!"
    end
end

puts "congrats, you win!"
#---------------------
# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. 
#Use array methods.
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
# Your choice...

# 5. Sort the remaining days alphabetically
#1:
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
#2:
sunday_first = days_of_the_week.unshift("Sunday")
print sunday_first[0...-1]
#3:
weekdays = days_of_the_week[0..4]
puts weekdays
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
weekdays = days_of_the_week[0..4]
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
weekend = days_of_the_week[5..6]
print weekend
two_arrays = []
two_arrays.push(weekdays)
two_arrays.push(weekend)
print two_arrays
#4:
new_weekdays = two_arrays.pop
print new_weekdays
#5:
sorted = new_weekdays.sort
print sorted





