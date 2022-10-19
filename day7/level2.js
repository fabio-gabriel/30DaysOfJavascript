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

