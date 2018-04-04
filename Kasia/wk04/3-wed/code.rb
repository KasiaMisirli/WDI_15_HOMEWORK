### Arrays

Starting with the following array...


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


Access the second value in `planeteers`.


planeteers[1]


Add "Heart" to the end of `planeteers`.


planeteers.push("Heart")


Remove "Captain Planet" from the array (without using pop or shift).
planeteers.delete("Captain Planet")


Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heros = []
heros.push(planeteers)
heros.push(rangers)
print heros

Alphabetize the contents of `heroes` using a method. [The Ruby documentation might 
help](http://ruby-doc.org/core-2.2.0/Array.html).
heros = [["Earth", "Wind", "Captain Planet", "Fire", "Water"],
 ["Red", "Blue", "Pink", "Yellow", "Black"]]
arr = heros.flatten
sorted = arr.sort
print sorted


Randomize the contents of `heroes` using a method. 
[The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
sorted = ["Black", "Blue", "Captain Planet", "Earth", "Fire", "Pink", "Red", "Water", "Wind", "Yellow"]
ran_arr = sorted.shuffle
print ran_arr

#### Bonus

Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
heros = ["Black", "Blue", "Captain Planet", "Earth", "Fire", "Pink", "Red", "Water", "Wind", "Yellow"]
heros.sample


Select all elements in `heroes` that begin with "B" using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

heros = ["Black", "Blue", "Captain Planet", "Earth", "Fire", "Pink", "Red", "Water", "Wind", "Yellow"]
heros.each to |string|
   



### Hashes

Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. 
They should have values of "Michelangelo", "Nunchuks" and `true` respectively.

ninja_turtle = {"name":"Michelangelo","weapon":"Nunchuks","radical": "true"}

Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.'

ninja_turtle["age"]=15

Remove the `radical` key-value pair from `ninja_turtle`.

ninja_turtle.delete(:radical)

Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).

ninja_turtle["pizza_toppings"] = ["cheese", "pepperoni", "peppers"]

Access the first element of `pizza_toppings`.

ninja_turtle[:pizza_toppings][0]

Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).'

array = ninja_turtle.keys
puts array

#### Bonus

Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

```rb
# Your answer here
```
ninja_turtle.each do |key|
    