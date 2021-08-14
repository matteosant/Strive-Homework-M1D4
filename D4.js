/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let firstFivePositiveNum = [1,2,3,4,5]
console.log(firstFivePositiveNum)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let striveStudent = {
    name: `Matteo`,
    surname: `Santini`,
    email: `matteosantini16@gmail.com`,
    age: 29,
}
console.log(striveStudent)



/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

striveStudent.hasDrivingLicense = true
console.log(striveStudent)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete striveStudent.hasDrivingLicense
console.log(striveStudent)
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let anotherStriveStudent = {
    name: `Bogdan`,
    surname: `Birau`,
    email: `bogdan.birau@gmail.com`,
    age: 27,
}
console.log(anotherStriveStudent)

if (anotherStriveStudent.email === striveStudent.email){
    console.log(`They have the same email adress, something's not right`)
} else {
    console.log(`they don't have the same email adress, so they are two different people`)
}


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

//let totalShoppingCart = `${234}$`

let totalShoppingCart = 234
let shippingCost = 10


if (totalShoppingCart < 50){
    totalShoppingCart += shippingCost;
    console.log(`Your total is ${totalShoppingCart}€. The shipping price of ${shippingCost}$ is included`)
} else {
console.log(`Your total is ${totalShoppingCart}€, since you are spending more than 50€ the shipping cost is on us`)
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let todayIsBlackFriday = true
let blackFridayDiscount = (totalShoppingCart/100)*20

/*

if (totalShoppingCart < 50 && !(todayIsBlackFriday)) {
    totalShoppingCart += shippingCost;
    console.log(`Your total is ${totalShoppingCart}€`)
} else if (todayIsBlackFriday && totalShoppingCart < 50) {
totalShoppingCart += shippingCost - blackFridayDiscount;
console.log(`Your total is ${totalShoppingCart}`)
} else if (todayIsBlackFriday && totalShoppingCart > 50){
    totalShoppingCart -= (shippingCost + blackFridayDiscount)
    console.log(`Your total is ${totalShoppingCart}`)
} else if(totalShoppingCart > 50 && !(todayIsBlackFriday)){
totalShoppingCart -= shippingCost;
console.log(`Your total is ${totalShoppingCart}`)
}

*/

if (todayIsBlackFriday = true){
    if (totalShoppingCart > 50){
        totalShoppingCart -= (blackFridayDiscount + shippingCost)
    } else {
        totalShoppingCart -= blackFridayDiscount
    }
} else {  
    if (totalShoppingCart > 50) {
        totalShoppingCart -= shippingCost
 }else {
        totalShoppingCart
    }
  
}
console.log(totalShoppingCart)




/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let myCar1 = {
    brand: `Fiat`,
    model: `Punto`,
    licensePlate: `ITH43MMC3`,
}

let myCar2 = {}
Object.assign(myCar2, myCar1)
myCar2.licensePlate = `dg4455454`

let myCar3 = {}
Object.assign(myCar3, myCar1)
myCar3.licensePlate = `dg445sx54`
let myCar4 = {}
Object.assign(myCar4, myCar1)
myCar4.licensePlate = `dg44556764`

let myCar5 = {}
Object.assign(myCar5, myCar1)
myCar5.licensePlate = `dg44336764`

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [myCar1, myCar2, myCar3, myCar4, myCar5]



/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

for (let i = 0; i < 3; i++){
    console.log(carsForRent[i].licensePlate, carsForRent[i].brand )
}



/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [`Lamborghini`, `Panda`, `Dodge Charger`]
let totalCars = carsForSale.concat(carsForRent)
console.log(totalCars)
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for (let i = 0; i < 3; i++){
    console.log(carsForSale[i])
}

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/