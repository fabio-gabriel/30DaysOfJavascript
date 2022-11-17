const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Explain the difference between forEach, map, filter, and reduce.

/*For Each -> Loops through an array and takes in a function
  Map -> Loops through an array and modifies the elements in the array based on the function that has been passed as a parameter
  filter -> Similar to map, but removes items from the array instead
  reduce -> Reduces an array to a single item. Takes an accumulator value and a current value, great for finding the sum of all elements in an array for example
*/

//Define a callback function before you use it in forEach, map, filter or reduce.

function callback(one, two, three) {
  return one + two + three
}

//Use forEach to console.log each country in the countries array.

countries.forEach(element => console.log(element));

//Use forEach to console.log each name in the names array.

names.forEach(element => console.log(element))

//Use forEach to console.log each number in the numbers array.

numbers.forEach(element => console.log(element))

//Use map to create a new array by changing each country to uppercase in the countries array.

const countriesCapitalized = countries.map(element => element.toUpperCase())

//Use map to create an array of countries length from countries array.

const countriesLength = countries.map(element => element.length)

//Use map to create a new array by changing each number to square in the numbers array

const numbersSquare = numbers.map(element => element * element)

//Use map to change to each name to uppercase in the names array

const namesCapitalized = names.map(element => element.toUpperCase())

//Use map to map the products array to its corresponding prices.

const productPrice = products.map(element => element.price)

//Use filter to filter out countries containing land.

const countriesLand = countries.filter(element => element.includes('land'))

//Use filter to filter out countries having six character.

const countriesSix = countries.filter(element => element.length == 6)

//Use filter to filter out countries containing six letters and more in the country array.

const countriesSixMore = countries.filter(element => element.length >= 6)

//Use filter to filter out country start with 'E';

const countriesStartE = countries.filter(element => element[0] == 'E')

//Use filter to filter out only prices with values.

const productWithValue = products.filter(element => typeof element.price == 'number')

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = arr => {
  arr.filter(element => typeof element == 'string')
}

//Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, cur) => acc + cur, 0)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let countriesSentence = countries.reduce((acc, cur) => acc.concat(', ', cur))

countriesSentence = countriesSentence.concat(' are north European countries')

//Explain the difference between some and every

/* 
Some returns true if one element is similar
Every returns true only if all elements are similar
*/

//Use some to check if some names' length greater than seven in names array

console.log(names.some(element => element.length >= 7))

//Use every to check if all the countries contain the word land

console.log(countries.every(element => element.includes('land')))

//Explain the difference between find and findIndex.

/*  
find returns the element itself
findIndex return the index of the element 
*/

//Use find to find the first country containing only six letters in the countries array

console.log(countries.find(element => element.length === 6))

//Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex(element => element.length === 6))

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(element => element === 'Norway'))

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(element => element === 'Russia'))