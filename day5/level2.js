//First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

words = text.replace(/[^a-zA-Z ]/gi, '')
words = words.split(' ')

console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift('Meat')
console.log(shoppingCart)

//add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push('Sugar')
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey

const allergic = false

if (allergic){
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}

console.log(shoppingCart)

//modify Tea to 'Green Tea'

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ['Brazil', 'Poland', 'Germany', 'Spain, but no S'] 

console.log(countries)

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

console.log(webTechs)

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocessor')
} else {
  webTechs.push('Sass')
}

console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)