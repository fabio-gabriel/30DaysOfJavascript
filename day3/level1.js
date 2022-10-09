//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Fábio', lastName = 'Gomes', country = 'Brazil', city = 'Fortaleza', age = 20, isMarried = false, year = 2022

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

//Check if type of '10' is equal to 10

console.log(typeof '10' == typeof 10)

//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10)

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.

console.log(4 <= 5)
console.log('Carlos' == 'Carlos')
console.log(1 == true)

//Write three JavaScript statement which provide falsy value.

console.log( 4 >= 5)
console.log('Carlos' == 'carlos')
console.log(1 == false)

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 -> true
console.log(4 > 3)

// 4 >= 3 -> true
console.log(4 >= 3)

// 4 < 3 -> false
console.log(4 < 3)

//4 <= 3 -> false
console.log(4 <= 3)

//4 == 4 -> true
console.log(4 == 4)

//4 === 4 -> true
console.log(4 === 4)

//4 != 4 -> false
console.log(4 != 4)

//4 !== 4 -> false
console.log(4 !== 4)

//4 != '4' -> false
console.log(4 != '4')

//4 == '4' -> true
console.log(4 == '4')

//4 === 4 -> false
console.log(4 === '4')

//Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length != 'jargon'.length)

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//4 > 3 && 10 < 12 -> true
console.log(4 > 3 && 10 < 12)

//4 > 3 && 10 > 12 -> false
console.log(4 > 3 && 10 > 12)

//4 > 3 || 10 < 12 -> true
console.log(4 > 3 || 10 < 12)

//4 > 3 || 10 > 12 -> true
console.log(4 > 3 || 10 > 12)

//!(4 > 3) -> false
console.log(!(4 > 3))

//!(4 < 3) -> true
console.log(!(4 < 3))

//!(false) -> true
console.log(!(false))

//!(4 > 3 && 10 < 12) -> false
console.log(!(4 > 3 && 10 < 12))

//!(4 > 3 && 10 > 12) -> true
console.log(!(4 > 3 && 10 > 12))

//!(4 === '4') -> true
console.log(!(4 === '4'))

//There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

//Use the Date object to do the following activities
const date = new Date()

//What year is today?
console.log(date.getFullYear())

//What is the month today as a number?
console.log(date.getMonth())

//What is the date today?
console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)

//What is the day today as a number?
console.log(date.getDate())

//What is the hours now?
console.log(date.getHours())

//What is the minutes now?
console.log(date.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(date.getTime())