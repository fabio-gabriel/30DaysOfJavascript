//Linear equation is calculated as follows: ax + by + c = 0. (It's ax + b?) Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
  return (a*x) + (b*y) + c
}

console.log(solveLinEquation(2, 2, 2, 2, 2))

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

const solveQuadEquation = (a, b, c, x) => {
  return (a*x*x) + (b*x) + c
}

console.log(`Y value is ${solveQuadEquation(2, 5, 10, 2)}`)

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = arr => {
  for (const i of arr) {
    console.log(i)
  }
}

printArray('JavaScript')

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const date = new Date()

function showDateTime() {
  console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
}

showDateTime()

//Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x, y) => {
  let temp = y
  y = x
  x = temp

  console.log(`x => ${x}, y => ${y}`)
}

swapValues(3, 6)

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = arr => {
  let reverse = []

  for (const i in arr) {
    console.log(arr.length - i - 1)
    reverse[i] = arr[arr.length - i - 1]
  }

  return reverse
}

console.log(reverseArray([1, 2, 3, 4, 5]))

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
  return arr.toUpperCase()
}

console.log(capitalizeArray('This is in all caps'))

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (arr, item) => {
  arr.push(item)
  return arr
}

console.log(addItem([1, 2, 3], 5))

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (arr, item) => {
  if (arr.indexOf(item) > -1) {
    arr.splice(item, 1)
  }

  return arr
}

console.log(removeItem([1, 2, 3, 4], 2))

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (low, high) => {
  let sum = 0

  for (let i = low; i <= high; i++) {
    sum += i
  }

  return sum
}

console.log(sumOfNumbers(2, 5))

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (low, high) => {
  let sum = 0

  for (let i = low; i <= high; i++) {
    if (i % 2 != 0) {
      sum += i
    }
  }

  return sum
}

console.log(sumOfOdds(2, 5))

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (low, high) => {
  let sum = 0

  for (let i = low; i <= high; i++) {
    if (i % 2 == 0) {
      sum += i
    }
  }

  return sum
}

console.log(sumOfEven(2, 5))

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(int) {
  if (int % 2 == 0) {
    console.log(`The number of odds are ${int/2} \nThe number of evens are ${(int/2)+1}`)
  } else {
    console.log(`The number of odds are ${(int+1)/2} \nThe number of evens are ${(int+1)/2}`)
  }
}

evensAndOdds(5)

//Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArguments() {
  let sum = 0
  
  for (const i of arguments) {
    sum += i  
  }

  return sum
}

console.log(sumOfArguments(1, 2, 3))

//Writ a function which generates a randomUserIp.

function randomUserIp() {
  return `${Math.round((Math.random())*999)}.${(Math.round((Math.random())*999))}.${(Math.round((Math.random())*999))}.${Math.round((Math.random())*999)}`
}

console.log(randomUserIp())

//Write a function which generates a randomMacAddress

function randomMacAddress() {
  return `${generateMacNumber()}-${generateMacNumber()}-${generateMacNumber()}-${generateMacNumber()}-${generateMacNumber()}-${generateMacNumber()}`
}

const generateMacNumber = () => {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  return `${characters.charAt(Math.floor(Math.random()*characters.length))}${characters.charAt(Math.floor(Math.random()*characters.length))}`
}

console.log(randomMacAddress())

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator(size) {
  let characters = '0123456789abcdef'
  let number = ''

  for (let i = 0; i < size; i++) {
    number += characters.charAt(Math.floor(Math.random()*characters.length))
  }

  return number
}

console.log(randomHexaNumberGenerator(15))

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator(size) {
  let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = ''

  for (let i = 0; i < size; i++) {
    number += characters.charAt(Math.floor(Math.random()*characters.length))
  }

  return number
}

console.log(userIdGenerator(15))

