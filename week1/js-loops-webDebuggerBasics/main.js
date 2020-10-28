//loops

// for..in
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let companyIndex in companies){
    console.log(companies[companyIndex],companyIndex)
}

// for..of
for(let company of companies){
    console.log(company)
  }

//ex 1
const names = ["Avi" , "Samer" , "Amir"]
const ages = [19 , 20 , 23]

for(let i =0 ; i < names.length ; i++)
  console.log(names[i]+" is "+ages[i]+" years old")
  
//ex 2
const nums = [2,2,2,2,2,2]

let sum = 0
for(let cell of nums)
  sum+= cell
console.log(sum)

//ex 3
const average = sum/nums.length

console.log(average)

//ex 4
const arrayOfNums = []

for(let i =1 ; i <= 100; i++)
  arrayOfNums.push(i)

for(let cell  of arrayOfNums)
  if(cell % 2 != 0)
    console.log(cell)

//ex 5
let nums1 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let index in nums1)
  if(nums1[index]==709)
    console.log(index)

//ex 6
const names1 = ["Ashley", "Donovan", "Lucas"]
const ages1 = [23, 47, 18]
const people = []

for(let index in names1)
  people.push({name: names1[index] , age: ages1[index]})
console.log(people)

//ex 9
for(let index in people)
console.log(people[index].name+" is "+people[index].age+" years old")

//ex 10
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let index in posts){
    if(posts[index].id == 2){
        posts.splice(index,1)
        break
    }
}
console.log(posts)

//ex 11
const posts1 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  
for(let cell of posts1){
    if(cell.id == 2){
        for(let index in cell.comments)
            if(cell.comments[index].id == 3){
                cell.comments.splice(index,1)
                break
            }
        break
    }
}
console.log(posts1)

//ex 12
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

for(let key of Object.keys(dictionary)){
    console.log("Words that begin with  "+key+":")
    for(let word of dictionary[key])
        console.log("     "+word)
}



let frontEnd = ['HTML', 'CSS', 'Javascript'];
let frontEndLangages = frontEnd;


//debugger;
