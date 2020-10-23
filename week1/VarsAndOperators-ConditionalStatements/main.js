const maxCapacity = 14
let surfTime = true
let bestStudent
//const purposeInLife 

console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
//console.log(purposeInLife)

const myVariable = "The potential of the future " 

const result = myVariable + "is the best thing ever"

console.log(result) 

let myVariable1 = "The potential of the future " 

myVariable1 += "is the best thing ever"

console.log(myVariable1) 

const password = "pass123";
const confirmPassword = "pass123"

console.log("passwords are identical: "+ (password == confirmPassword))

console.log(" 423 X 12 = "+ (423 * 12) + " --  802 / 2 = "+ (802/2) + " -- (5+6)*3 = "+((5+6)*3) )

// if conditionss-----------

/1
let numChildren = 0
const isCareful = false
if(!isCareful) 
    numChildren++
console.log("numm of children is : " + numChildren)

//2
let silverwareCount = 3;
if(silverwareCount % 2 != 0 )
    console.log("silverwarecount is odd there is something missing")

//3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "good")
    salary += stellarBonus
else
    salary += goodBonus

console.log(" salary is = "+salary)

//4
const isVIP = true
let cash = 200

if(isVIP || cash > 300)
    console.log("Welcome to the club.")
else    
    console.log("goodbye peasant.")

//5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

console.log(a + " " + b + " " + c + " " + d)

//6
const gender = null
let profession = "business"
if(gender != null)
    profession += gender
else
    profession += "person"
console.log(profession)

//7
let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if(boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase >= 4)
        console.log("Hello, would you like to upgrade your car?")
    else
        console.log("Hello, are you satisfied with your car?")
}
else if(boughtTesla)
    console.log("would u like to move to the US?")
else
    console.log("would u like to buy a Tesla?")
