//Arrayssss

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

console.log(genes.toString())

const temp = genes[4]
genes[4] = genes[2]
genes[2] = temp

genes.push(genes[3],genes[3])

genes.splice(3,1)

genes.splice(0,0,"FXT")
console.log(genes.toString())


//Objects

//1
let car = {color: "silver",
    numWheels: 4,
    isFancy: false}

let fancyString = "fancy"
if(!car.isFancy)
    fancyString = "not fancy"

    console.log("The "+car.color+" car has "+car.numWheels+" wheels. It is "+fancyString)


//2
let object1 = {
    item: "watch",
    toBeginning: false,
    items: ["charger","smart phone","computer"]
}
if(object1.toBeginning)
    object1.items.splice(0,0,object1.item)
else
    object1.items.splice(object1.items.length,0,object1.item)

console.log(object1.items)

//3
const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

human[babyNameKey] = babyNameValue
console.log(human[babyNameKey] + " or " + human.name)
human.name = "pikachu"
console.log(human.name)

//4(1)
let p1 = {
    name: "Jill",
    age: 25,
    city: "Haifa"
}
let p2 = {
    name: "Robert",
    age: 25,
    city: "Haifa"
}
if(p1.age == p2.age){
    if(p1.city == p2.city)
        console.log("Jill wanted to date Robert")
    else
        console.log("Jill wanted to date Robert, but couldn't")
}

//5(2)
const myList = [{name: "rob",age: 22},{name: "Paul",age: 24}]
console.log("5(2) "+myList.length)

console.log("5(2) "+myList[0].age)
myList[0].age++
console.log("5(2) "+myList[0].age)
myList.splice(1,1)
console.log("5(2) "+myList.length)

//6(3)
const myList2 = [{name: "kate",age: 20},{name: "Caruso",age: 29}]
myList.push(...myList2)
console.log("6(2) "+myList.length)

//7(4)
const library = {books: [{title1: "harry potter", author: "jk rowling"},{title1: "percy jackson", author: "dunno"}]}
myList.push(library);
console.log(myList[myList.length-1].books[0].title1+","+myList[myList.length-1].books[1].title1)

//8-9(5-5.2)
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation').toLowerCase();

  let output
if(reservations[name]){
  if(reservations[name].claimed)
    output = "Hmm, someone already claimed this reservation"
  else if(!reservations[name].claimed)
    output = "Welcome, Bob"
}
else{
    reservations[name] = {claimed: true}
    output = "Welcome, "+name+" we have an open table for you. isClaimed: " + reservations[name].claimed
}
  console.log(output)

  //10(extensions)
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,  // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven, works = kitchen.fridge.works, price = kitchen.fridge.price , owner = kitchen.owner
const food = kitchen.fridge.items[1].name , foodExpireDate = kitchen.fridge.items[1].expiryDate

if(hasOven && works){
    console.log(owner+"'s "+food+" expired "+foodExpireDate+" day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the "+food+" in. 1")
}
else if(!hasOven && works){
    console.log(owner+"'s "+food+" expired "+foodExpireDate+" day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the "+food+" in. 2")
}
else if(hasOven && !works){
    console.log(owner+"'s "+food+" expired "+foodExpireDate+" day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the "+food+" in. And she'll have to pay "+(price/2)+" to fix the fridge. 3")
}
else if(!hasOven && !works){
    console.log(owner+"'s "+food+" expired "+foodExpireDate+" day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the "+food+" in. And she'll have to pay "+(price/2)+" to fix the fridge. 4")
}
