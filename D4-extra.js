/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let maxArray = [1, 2, 10, 20, 50, 0, 5, 2]
// take the first element
let maxValue = maxArray[0]
for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > maxValue){
        maxValue = maxArray[i]
        break;
    } else {
        maxValue
    }
} 

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
let minArray = [330, 2, 10, 20, 50, 1, 5, 2]
// take the first element
let minValue = minArray[0]
for (let i = 1; i < minArray.length; i++) {
    if (minArray[i] < minValue){
        minValue = minArray[i]
    } else {
        minValue
    }
} 

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
console.log(`-------------------------------exercise 4`)

/*for (let i = 0; i < myArray.length; i++){
    if (myArray[i]%2===0){
        
        console.log(myArray[i])
        
    } else {
        console.log(``)
    }
}*/

let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {
    name: "Test"
}]

let acc = []

for (let i = 0; i < evenNumbers.length; i++) {
    if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1){
        acc.push(evenNumbers[i]) }
}
acc;

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

let myArray = [`r`, 4, 5, `three`, 83, 8, 3, 22]
let evenEntries = []
for (let i = 0; i < myArray.length; i++){
    if (typeof myArray[i] === "number" && myArray[i]%2 === 0){
 evenEntries.push(myArray[i])
     
    }
}
myArray = evenEntries
myArray;


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

const exercise6 = function() {
    
    let jump = `To the Moon!`

for (let i = 0; i < jump.length; i++) {
    
switch (jump[i]){
    
  case jump[i] = `o`:
    jump = jump.replace(jump[i], ``);
  

  case jump[i] = `e`:
    jump = jump.replace(jump[i], ``);
    break;
 
   }
}
return jump; // it's working partially it removes a space after "to"
} 

exercise6()


let str = "To the Moon";

function remVowel(str)
{
    let allVowels = [ 'a', 'e', 'i', 'o', 'u',
               'A', 'E', 'I', 'O', 'U' ];

    let result = "";
     
    for (let i = 0; i < str.length; i++)
    {
         
        if (!allVowels.includes(str[i])) /* it is returning what it's left when the vowels are not considered */
        {
            result += str[i]; 
        }
    }
    return result;
}

remVowel(str)

 




/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.


*/

let arrayIncrease = [34, 3, `aWOrd`, 9, `$$$$`]


for (let i = 0; i<arrayIncrease.length; i++) {
  if (typeof arrayIncrease[i] === `number`) {
    arrayIncrease[i]++
  }
}
arrayIncrease




/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let stringArray = [`I`, `am`, `Matteo`]
let myLength = []

for (let i = 0; i < stringArray.length; i++) {
  myLength.push(stringArray[i].length)
}
myLength;


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/