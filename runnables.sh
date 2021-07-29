#!/bin/sh

# read VALUE
pretty_code(){
    echo $1
    return 0
}

lint_code(){
    echo $1
}
echo "Select the runnable"
echo "\e[0;31m 1 - Prettier\e[2m"
echo "\e[0;32m 2 - Linter\e[0m"
echo "\e[0;33m 3 - Test\e[0m"
echo "\e[0;34m 4 - Build\e[0m"

read NUMBER

if ["$NUMBER" = "1"] 
then
    echo "Correct1"
    exit 0
elif ["$NUMBER" = "2"] 
then
    echo "Correct2"
    exit 0
elif ["$NUMBER" = "3"]
then
    echo "Correct3"
    exit 0
elif ["$NUMBER" = "4"] 
then
    echo "Correct4"
    exit 0
fi