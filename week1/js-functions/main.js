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
console.log(isNumberInArray(number4,8))



//6

const calculator = {
    add: function(firstNum,secondNum){
        return firstNum+secondNum
    },
    subtract: function(firstNum,secondNum){
        return firstNum-secondNum
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


//7

const increaseByNameLength = function(money,name) {
    return name.length * money
}

const makeRegal = function(name){
    return "His Royal Highness, "+name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//extention(8)

const splice = function(array,startIndex,deleteCount,...newElements){
    const deletedItems = []
    const returnedItems = []
    const temporaryContainer = []

    //start index
    if(startIndex > array.length)
        startIndex = array.length 
    else if(startIndex < 0){
        if(startIndex + array.length < 0)
            startIndex = 0
        else{
            startIndex = array.length + startIndex
        }
    }

    //delete 
    if(deleteCount > 0 || (typeof deleteCount == "undefined")){
        if(deleteCount > array.length || (typeof deleteCount == "undefined"))
            deleteCount = array.length
        const range = startIndex + deleteCount;
        for(let i = array.length-1; i > startIndex - 1 ; i--){
            if( i < range)
                deletedItems.push(array.pop())
            else
                temporaryContainer.push(array.pop())
        }
    }

    //place the new elements
    if(newElements.length > 0 ){
        for(let i = array.length-1 ; i > startIndex-1 ; i --)
            temporaryContainer.push(array.pop())
        for(let cell of newElements)
            array.push(cell)
    }

    //return items removed earlier to the original array
    while(temporaryContainer.length > 0)
        array.push(temporaryContainer.pop())

    //reverse the deleted array in the correct order
    while(deletedItems.length > 0)
        returnedItems.push(deletedItems.pop())
    return returnedItems
}

//splice([1,2,3,4] , 1, 0)

// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log("1",arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log("2",arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log("3",arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log("4",arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log("5",arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log("6",deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log("7",deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log("8",deleted); //should be [] 


// overriding the native splice method
Array.prototype.splice = function(startIndex,deleteCount,...newElements){
    const deletedItems = []
    const returnedItems = []
    const temporaryContainer = []

    //start index
    if(startIndex > this.length)
        startIndex = this.length 
    else if(startIndex < 0){
        if(startIndex + this.length < 0)
            startIndex = 0
        else{
            startIndex = this.length + startIndex
        }
    }

    //delete 
    if(deleteCount > 0 || (typeof deleteCount == "undefined")){
        if(deleteCount > this.length || (typeof deleteCount == "undefined"))
            deleteCount = this.length
        const range = startIndex + deleteCount;
        for(let i = this.length-1; i > startIndex - 1 ; i--){
            if( i < range)
                deletedItems.push(this.pop())
            else
                temporaryContainer.push(this.pop())
        }
    }

    //place the new elements
    if(newElements.length > 0 ){
        for(let i = this.length-1 ; i > startIndex-1 ; i --)
            temporaryContainer.push(this.pop())
        for(let cell of newElements)
        this.push(cell)
    }

    //return items removed earlier to the original array
    while(temporaryContainer.length > 0)
    this.push(temporaryContainer.pop())

    //reverse the deleted array in the correct order
    while(deletedItems.length > 0)
        returnedItems.push(deletedItems.pop())
    return returnedItems
}

console.log("####################")

// remove 1 element
arr = [1,2,3]
arr.splice(0,1); 
console.log("1)",arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be []