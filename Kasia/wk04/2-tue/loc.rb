puts Dir.pwd
print "Enter a file name: "

input = gets.to_s
k = 0
File.readlines(input).each do |line|
    k += 1
end

puts k

# a = IO.readlines(gets.to_s)
# print a.length


# if input == data.txt
#     lines = File.foreach(file).count

# File.readlines('foo').each do |line|