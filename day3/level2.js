//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Calculate the area of a triangle', 'Base')
let height = prompt('Calculate the area of a triangle', 'Height')

alert(`The area is ${base*height*0.5}`)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let perimeter = prompt('Calculate the perimeter of a triangle', 'Sides, separated by space eg.: 3 4 1')

perimeter = perimeter.split(' ')

alert(`The perimeter is ${parseInt(perimeter[0]) + parseInt(perimeter[1]) + parseInt(perimeter[2])}`)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt('Calculate the area of a rectangle', 'length')
let width = prompt('Calculate the area of a rectangle', 'width')

alert(`The area is ${length*width} and the perimeter is ${2*(parseInt(length)+parseInt(width))}`)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt('Calculate the area of a circle', 'Radius')

alert(`The area is ${Math.PI*radius*radius} and the circumference is ${2*Math.PI*radius}`)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x1 = 1, x2 = 3
let y1 = 2*x1 - 2, y2 = 2*x2 - 2
let slope = (y2-y1) / (x2-x1)

console.log(`The slope is ${slope}`)
console.log(`The y-intecept is ${2*0 - 2} and the x-intercept is ${2/2}`)

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let point1 = [2, 2], point2 = [6, 10]
let slope2 = (point2[1]-point1[1]) / (point2[0]-point1[0])

console.log(`The slope is ${slope2}`)

//Compare the slope of above two questions

slope == slope2 ? console.log('The slopes are equal') : console.log('The slopes are not equal')

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let coefficients = [1, 6, 9]

let a = coefficients[0], b = coefficients[1], c = coefficients[2]
let delta = b*b - 4*a*c

console.log(`The root of x^2 + 6x + 9 is ${(-b + delta) / (2*a)}`)

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt('Type in the number of hours')
let rate = prompt('Type in the rate per hour')

alert(`The pay is ${hours*rate}$`)

//If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = prompt("Type in your name")
myName = myName.replace(/[^a-zA-Z]/g, '')
myName.length > 7 ? alert('Your name is long') : alert('Your name is short')

//Compare your first name length and your family name length and you should get this output.

firstName.length >= lastName.length ? console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`) : console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250, yourAge = 25

console.log(`I am ${myAge-yourAge} years older than you`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let userAge = prompt('Type in your age')

userAge >= 18 ? alert("You are allowed to drive!") : alert(`You are not allowed to drive, please wait ${18-userAge} more years`)

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years (??? Didn't understand, assuming how many seconds left to live)

let currentAge = prompt("Please type in your age")

alert(`You have ${(100-currentAge) * 31536000} seconds left to live`)

//Create a human readable time format using the Date time object

console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`)

console.log(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)

console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
