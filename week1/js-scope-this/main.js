// // What will console log?
// // Will there be an error?
// //      Why?
// // Will something be undefined?
// //      Why?
// // To what scope does each variable belong?
// //      Global or local? If local, to which specifically?

// //===================================================================================
// //Section 1
// //===================================================================================
// const run = true //global

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//         //running x8
//     }
//     console.log("Finished running " + distance + " miles")
//     //Finished running 8 miles
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")    
// //will throw error because distance is not defined in the global scope
// //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound) // error because cowSound is not defined in the else scope(local)
// }

// //===================================================================================
// //Section 3
// //===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)
// //will print everything

// //===================================================================================
// //Section 4
// //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("*** Planting the " + seed + " inside a " + pot)
//     //Error due to seed not being defined in this scode or the global scope
// }

// plant()

// //===================================================================================
// //Section 5 - Optional(if you have time)
// //===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found//error as its not defined in  the scope of the main local function but its defined in the if
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// //===================================================================================
// //Section 6 - Optional (if you have time)
// //===================================================================================
// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")// will be printed
// }
// else {
//     console.log("Here we go again...")
// }

const counter = {
    count: 0,
  
    updateCounter: function () {
      this.count += 1;
    }
  };
  
  counter.updateCounter();
  counter.updateCounter();
  counter.updateCounter();
  
  console.log(counter.count);
  

let cat = {
    makeNoise: function () {
        console.log(this.noise);
    },
    noise: "Meow!"
  };
  
  let dog = {
    makeNoise: cat.makeNoise,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();
  
  const makeNoiseFunction = function () {
    console.log(this.noise);
  }
  
cat = {
    makeNoise: makeNoiseFunction,
    noise: "Meow!"
  };
  
  dog = {
    makeNoise: makeNoiseFunction,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();
  

  //this

//1
  const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        console.log('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"
  

  //2
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  

  //3
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());
  
  //4
  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(num){
        this.coinCount -= num
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  

  //5
  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    console.log(person.name + " said: " +result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
  
  //6
  const coffeeShop = {
    beans: 40,
    beansCost: 5,
    money: 100000,
  
    drinkRequirements: {
      latte: {beanRequierment: 10, price: 60},
      americano: {beanRequierment: 5, price: 30},
      doubleShot: {beanRequierment: 15, price: 100},
      frenchPress: {beanRequierment: 12, price: 80}
    },
  
    makeDrink: function (drinkType) {
      if(this.drinkRequirements[drinkType].beanRequierment != undefined && (this.beans - this.drinkRequirements[drinkType].beanRequierment) > 0){
        this.beans -= this.drinkRequirements[drinkType].beanRequierment
        return true
      }
      else if(this.drinkRequirements[drinkType] != undefined && (this.beans - this.drinkRequirements[drinkType].beanRequierment) < 0)
        console.log("Sorry, we're all out of beans")
      else
        console.log("Sorry, we don't make "+drinkType)
        
      return false
    },
    buyBeans: function(beansAmount){
        const finalCost = beansAmount * this.beansCost
        if(finalCost > this.money)
            console.log("Money is not enough to buy this amount, cant buy beans")
        else{
            this.money -= finalCost
            this.beans += beansAmount
        }
    },
    increaseMoney(money){
        this.money += money
    },
    buyDrink: function(drinkType){
        if(this.makeDrink(drinkType))
            this.increaseMoney(this.drinkRequirements[drinkType].price)
    }
  }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

//   coffeeShop.buyBeans(20)
//   coffeeShop.makeDrink("frenchPress"); 

  console.log(coffeeShop.money,coffeeShop.beans)
  coffeeShop.buyDrink("latte")
  coffeeShop.buyDrink("doubleShot")
  coffeeShop.buyDrink("frenchPress")
  console.log(coffeeShop.money,coffeeShop.beans)
  coffeeShop.buyBeans(100)
  console.log(coffeeShop.money,coffeeShop.beans)
  coffeeShop.buyDrink("latte")
  coffeeShop.buyDrink("doubleShot")
  coffeeShop.buyDrink("frenchPress")
  console.log(coffeeShop.money,coffeeShop.beans)
