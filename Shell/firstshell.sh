#!/bin/bashsh

#set -x
echo my first shell script

read -p "Enter value for a: " a
read -p "Enter value for b: " b

echo If Condition

if [ "$a" -gt "$b" ];
then
	echo "a is greated than b"
else
	echo "b is greater than a"
fi

echo for loop
for i in {1..5}
do
	echo "Iteration $i"
done

