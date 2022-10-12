const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

i = 0
do {
  console.log(i)
  i++
} while (i <= 10);

//Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

i = 10
while (i >= 0) {
  console.log(i)
  i--
}

i = 10
do {
  console.log(i)
  i--
} while (i >= 0);

//Iterate 0 to n using for loop

let n = 20
for (let i = 0; i <= 20; i++) {
  console.log(i)
}

//Write a loop that makes the following pattern using console.log():

/*  
  #
  ##
  ###
  ####
  #####
  ######
  ####### 
*/

for (let i = 1; i <= 7; i++) {
  let array =  new Array(i).fill('#')
  console.log(array.join(''))
}

//Use loop to print the following pattern:
/* 
  0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100 
*/ 

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i*i}`)
}

//Using loop print the following pattern

/* 
  i    i^2   i^3
  0    0     0
  1    1     1
  2    4     8
  3    9     27
  4    16    64
  5    25    125
  6    36    216
  7    49    343
  8    64    512
  9    81    729
  10   100   1000
*/

console.log('i   i^2   i^3')
for (let i = 0; i <= 10; i++) {
  console.log(`${i}   ${i*i}   ${i*i*i}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  let isPrime = true

  for (let j = 2; j <= i - 1; j++) {
    if (i % j == 0) {
      isPrime = false
      break
    }
  }

  if (isPrime) {
    console.log(i)
  }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0

i = 0
while (i <= 100) {
  sum += i
  i++
}

console.log('The sum of all numbers from 0 to 100 is ', sum)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEvens = 0
let sumOdds = 0

i = 0
while (i <= 100) {
  i % 2 == 0 ? sumEvens += i : sumOdds += i
  i++
}

console.log(`The sum o fall evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumArray = [sumEvens, sumOdds]
console.log(sumArray)

//Develop a small script which generate array of 5 random numbers

let randomArray = new Array(5)

for (let i = 0; i < 5; i++) {
  randomArray[i] = Math.random()*11
}

console.log(randomArray)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomUniqueArray = new Array(5)
let value = Math.random()*11

for (let i = 0; i < 5; i++) {
  while (randomUniqueArray.includes(value)) {
    value = Math.random()*11
  }
  
  randomUniqueArray[i] = value
}

console.log(randomArray)

//Develop a small script which generate a six characters random id:
let list = 'abcdefghijklmnopqrstuvwxyz0123456789.,;'
let id = ''

for (let i = 0; i <= 6; i++) {
  let char = list.charAt(Math.round(Math.random()*list.length))
  console.log(char)
  id = id.concat(char)
}

console.log(id)