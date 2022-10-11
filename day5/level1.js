//Declare an empty array;

let emptyArray = []

//Declare an array with more than 5 number of elements

let arrayOfFive = Array(5).fill('ye')

//Find the length of your array

console.log(arrayOfFive.length)

//Get the first item, the middle item and the last item of the array

console.log(arrayOfFive[0], arrayOfFive[2], arrayOfFive[4])

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = ['String', 10, 50.7, true, null, ['ye', 'ye']]

console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()

console.log(itCompanies)

//Print the number of companies in the array

console.log(itCompanies.length)

//Print the first company, middle and last company

console.log(itCompanies[0], itCompanies[Math.round((itCompanies.length)/2) - 1], itCompanies[itCompanies.length - 1])

//Print out each company

console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])

//Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let company = prompt('Type in the company name')

if (itCompanies.includes(company)) {
  console.log(company, 'exists')
} else {
  console.log('Company not found')
}

//Filter out companies which have more than one 'o' without the filter method

itCompanies.forEach(element => {
  if (element.indexOf('o') != element.lastIndexOf('o')){
    console.log(element)
  }
}); //Doing it without loop would be too time consuming

//Sort the array using sort() method

itCompanies.sort()

//Reverse the array using reverse() method

itCompanies.reverse()

//Slice out the first 3 companies from the array

console.log(itCompanies.slice(0, 3))

//slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

//Slice out the middle IT company or companies from the array

if (itCompanies.length % 2 == 0) {
  console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2) + 2))
} else {
  console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length/2) + 1))
}

//Remove the first IT company from the array

let itCompanyShifted = []
itCompanyShifted = itCompanyShifted.concat(itCompanies) //clone the array 
itCompanyShifted.shift()
console.log(itCompanyShifted)

//Remove the middle IT company or companies from the array

let itCompanySpliced = []
itCompanySpliced = itCompanySpliced.concat(itCompanies) 

if (itCompanySpliced.length % 2 == 0) {
  console.log(itCompanySpliced.splice(itCompanySpliced.length/2, (itCompanySpliced.length/2) + 2))
} else {
  console.log(itCompanySpliced.splice(itCompanySpliced.length/2, (itCompanySpliced.length/2) + 1))
}

//Remove the last IT company from the array

let itCompanyPopped = []
itCompanyPopped = itCompanyPopped.concat(itCompanies) 
itCompanyPopped.pop()
console.log(itCompanyPopped)

//Remove all IT companies

itCompanies.splice()