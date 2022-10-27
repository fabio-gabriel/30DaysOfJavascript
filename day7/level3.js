//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGenerator(size, ids = 1) { //Dont want to use prompt
  let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = []

  for (let i = 0; i < ids; i++) {
    let number = ''

    for (let i = 0; i < size; i++) {
      number += characters.charAt(Math.floor(Math.random()*characters.length))
    }

    result.push(number)
  }

  return result
}

console.log(userIdGenerator(15, 3))

//Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
  return `rgb(${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)})`
}

console.log(rgbColorGenerator())

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num = 1) { //Dont want to use prompt
  let characters = '0123456789ABCDEF'
  let result = []

  for (let i = 0; i < num; i++) {
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color = color.concat(characters.charAt(Math.floor(Math.random()*characters.length)))
    }

    result.push(color)
  }

  return result
}

console.log(arrayOfHexaColors(3))

//Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = (num) => {
  let result = []

  for (let i = 0; i < num; i++) {
    result.push(`rgb(${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)})`)
  }

  return result
}

console.log(arrayOfRgbColors(5))

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = (hexa) => {
  let rgb = 'rgb('

  /* #F1F1F1 -> FF = (255), FF = (255), FF = (255)

  The 2 left digits represent the red color.
  The 2 middle digits represent the green color.
  The 2 right digits represent the blue color.
  */

  for (let i = 1; i < 7; i += 2) { 
    rgb = rgb.concat(parseInt(hexa[i]+hexa[i+1], 16)) //Converts the pair values from base 16 to 10

    if (i != 5) { //Add the commas
      rgb = rgb.concat(',')
    }
  }

  return rgb.concat(')')
}

console.log(convertHexaToRgb('#FFFFFF'))

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = (red, green, blue) => {
  return '#'.concat(red.toString(16), green.toString(16), blue.toString(16))
}

console.log(convertRgbToHexa(255, 255, 255))

//Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, number) => {
  let result =[]
  
  switch (type) {
    case 'rgb':
      for (let i = 0; i < number; i++) {
        result.push(`rgb(${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)},${Math.floor(Math.random()*999)})`)
      }  
      break;
  
    default:
      for (let i = 0; i < number; i++) {
        result.push(`#${(Math.round(Math.random() * 255)).toString(16)}${(Math.round(Math.random() * 255)).toString(16)}${(Math.round(Math.random() * 255)).toString(16)}`)
      }
      break;
  }

  return result
}

console.log(generateColors('rgb', 5))

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) { //Fisher-Yates Method
  let index = arr.length
  let random

  while(index != 0) {
    random = Math.floor(Math.random() * index)
    index--

    [arr[index], arr[random]] = [arr[random], arr[index]] //ES6 array position swap
  }

  return arr
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]))

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (int) => {
  let factorial = 1
  
  for (let i = 2; i <= int; i++) {
    factorial = factorial * i
  }

  return factorial
}

console.log(factorial(5))

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(arr) {
  return (arr.length != 0 ? false : true)
}

console.log(isEmpty([]))

//Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...args) => {
  let sum = 0
  
  for (const i of args) {
    sum += i
  }

  return sum
}

console.log(sum(1, 2, 4, 1))

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
  let sum = 0

  for (const i of arr) {
    if (!(isNaN(i))) {
      sum += i
    } else {
      console.log('Reasonable feedback')
    }
  }

  return sum
}

console.log(sumOfArrayItems([2, 2, 4, 4]))

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  let sum = 0

  for (const i of arr) {
    sum += i
  }

  return (sum/arr.length)
}

console.log(average([2, 4]))

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
  if (arr.length < 5) {
     'Not found'
  }

  arr[4] = arr[4].toUpperCase()

  return arr
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'lemon', 'Carrot']))

//Write a function called isPrime, which checks if a number is prime number.

const isPrime = number => {
  for (let j = 2; j <= number - 1; j++) {
    if (number % j == 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(7))

//Write a functions which checks if all items are unique in the array.

const uniqueness = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i+1); j < arr.length; j++) {

      if (arr[i] === arr[j]) {
        return false
      }
    }
  }

  return true
}

console.log(uniqueness([1, 2, 3, 4, 5, 6, 7]))
