//1

const calcAge = function(currentYear,birthYear){
 return currentYear-birthYear;
}

let age = calcAge(2017, 1989)
console.log(age)

//2

const calcAge2 = function(currentYear,birthYear){
    const temp =  (currentYear-birthYear)+" or "+(currentYear-birthYear-1);
    return temp
}
age = calcAge2(2018, 2015)
console.log("You are either "+age)


//3

const isEven = function (num){
    return (num % 2 == 0)
}
const number3 = 210
console.log("number "+number3+" is even: "+isEven(number3))


//4
const printOdds = function(numbers){
    for(let cell of numbers)
        (cell % 2 == 0) && console.log(cell)
}

const number4 = [1,2,3,4,5,6,7,8,9,10]

printOdds(number4)

//5
const isNumberInArray = function (array,num){
    for(let cell of array)
        if (cell == num)
            return true
    return false
}

console.log(isNumberInArray(number4,11))
