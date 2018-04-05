Array and Hash access
A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]
How would you return the string "Erik"?
a[1]
How would you add your name to the array?
a  << "kasia"
a.push "Kasia"
B. Given the following data structure:
h = {
  0 => "Zero", 
  1 => "One", 
  :two => "Two", 
  "two" => 2}
How would you return the string "One"?
h[1]
How would you return the string "Two"?
h[:two]
How would you return the number 2?
h["two"]
How would you add {3 => "Three"} to the hash?
h[3]="Three"
How would you add {:four => 4} to the hash?
h["four"]=4
C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}
What is the return value of is[2 + 2 == 4]?
"It's true!"
What is the return value of is["Erik" == "Jonathan"]?
"It's false"
What is the return value of is[9 > 10]?
"It's false"
What is the return value of is[0]?
nil
What is the return value of is["Erik"]?
nil
D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
How would you add the number 7 to Erik's favorite numbers?

users["Jonathan"][:favorite_numbers] << 7  #doesnt work!

How would you add yourself to the users hash?
users.store("Kasia",{"Kasia",5})
users["Kasun"]={twitter:"Kasun"}

How would you return the array of Eriks favorite numbers?
users["Erik"][:favorite_numbers]
How would you return the smallest of Eriks favorite numbers?
num = users["Erik"][:favorite_numbers]
num.sort
num[0]
num = users["Erik"][:favorite_numbers].min
num = users["Erik"][:favorite_numbers].sort.first

How would you return an array of Anils favorite numbers that are also even?
number = users["Anil"][:favorite_numbers]
my_array = number.to_a
my_array.each { |x| 
    puts x if x.even? 
}
#---
even_number = []
users["Anil"][:favorite_numbers].each do |num|
  if num.even?
    even_number.push(num)
  end
#----
even_number = []
users["Anil"][:favorite_numbers].each do |num|
  even_number.push(num)  if num.even?
  end
#----
users["Anil"][:favorite_numbers].select do |num|
  num.even
end
#---
arr = users["Anil"][:favorite_numbers].select do |num|
  num > 13
end

How would you return an array of the favorite numbers common to all users? 
inject



users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
# arr1 & arr2
# arr1-arr2
# arr1+arr2


How would you return an array containing all users favorite numbers, sorted,
 and excluding duplicates?
 users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]
arr.sort
arr.sort.uniq