require_relative 'class'
require 'pry'

hash = {0=>"zero",1=>"one",2=>"two",3=>"three",4=>"four",5=>"five",6=>"six",7=>"seven",8=>"eight",9=>"nine",
        10=>"ten",11=>"eleven",12=>"twelve",13=>"thirteen",14=>"fourteen",15=>"fifteen",16=>"sixteen",
         17=>"seventeen", 18=>"eighteen",19=>"nineteen",
        20=>"twenty",30=>"thirty",40=>"forty",50=>"fifty",60=>"sixty",70=>"seventy",80=>"eighty",90=>"ninety"}

print "What number would you like spelled out?:  "

number = gets.chomp.to_i
if number.digits.count == 1
    print hash[number]
elsif number == 100
    print "hundred"
elsif  number.to_s.split('').first.to_i == 1
    print hash[number]
elsif number == 0
    print "zero"
elsif number.to_s.split('').last.to_i == 0
    print hash[number]
else arr = number.to_s.split('')
    print hash[((arr.first)+"0").to_i] +"-"+ hash[arr.last.to_i]
end


