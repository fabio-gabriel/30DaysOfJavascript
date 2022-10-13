//Develop a small script which generate any number of characters random id:

// id = ''
// let idSize = prompt('Type in the size of the id')

// for (let i = 0; i < idSize; i++) {
//   let char = list.charAt(Math.round(Math.random()*list.length))
//   console.log(char)
//   id = id.concat(char)
// }

// console.log(id)

//Using the above countries array, create the following new array.

let allCaps = []

for (const i of countries) {
  allCaps.push(i.toUpperCase())
}

console.log(allCaps)

//Using the above countries array, create an array for countries length'.

let length = []

for (const i of countries) {
  length.push(i.length)
}

console.log(length)

//Use the countries array to create the following array of arrays:

let arrayOfarray = []

for (const i of countries) {
  arrayOfarray.push([i, i.toUpperCase().slice(0, 3), i.length])
}

console.log(arrayOfarray)

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let hasLand = []

for (const i of countries) {
  if (i.includes('land')) {
    hasLand.push(i)
  }
}

hasLand.length == 0 ? console.log('All these countries are without land') : console.log(hasLand)

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let endsWith = []

for (const i of countries) {
  if (i[i.length-1] == 'a' && i[i.length-2] == 'i') {
    endsWith.push(i)
  }
}

console.log(endsWith)

//Using the above countries array, find the country containing the biggest number of characters.

let largest = ''

for (const i of countries) {
  if (i.length > largest.length) {
    largest = i
  }
}

console.log(largest)

//Using the above countries array, find the country containing only 5 characters.

for (const i of countries) {
  if (i.length == 5) {
    console.log(i)
  }
}

//Find the longest word in the webTechs array

largest = ''

for (const i of webTechs) {
  if (i.length > largest.length) {
    largest = i
  }
}

console.log(largest)

//Use the webTechs array to create the following array of arrays:

let webArray = []

for (const i of webTechs) {
  webArray.push([i, i.length])
}

console.log(webArray)

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mern = ''

for (const i of mernStack) {
  mern = mern.concat(i[0])
}

console.log(mern)

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for (const i of technologies) {
  console.log(i)
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ['banana', 'orange', 'mango', 'lemon']
let reverseFruits = []

for (let i = (fruits.length - 1); i >= 0; i--) {
  reverseFruits.push(fruits[i])
}

console.log(reverseFruits)

//Print all the elements of array as shown below.

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (const i of fullStack) {
  for (const j of i) {
    console.log(j)
  }
}