//Declare a function fullName and it print out your full name.


function fullName() {
  console.log('Fábio Gabriel Esteves Ivo Gomes')
}

fullName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`
}

console.log(fullName2('Fábio Gabriel', 'Esteves Ivo Gomes')) 

//Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = function(a, b) {
  return a + b
}

console.log(addNumbers(5, 6))

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) => {
  return length * width
}

console.log(areaOfRectangle(5, 5))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return 2*(length + width)
}

console.log(perimeterOfRectangle(5, 5))

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) => {
  return length * width * height
}

console.log(volumeOfRectPrism(2, 2, 2))

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = r => {
  return Math.PI * r * r
}

console.log(areaOfCircle(3))

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  return Math.PI * 2 * r
}

console.log(circumOfCircle(3))

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const calcDensity = (mass, volume) => {
  return mass * volume
}

console.log(calcDensity(8, 8))

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const calcSpeed = (distance, time) => {
  return `${distance/time} km/h`
}

console.log(calcSpeed(20, 1))

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const calcWeight = (mass, gravity = 9.81) => {
  return `${mass*gravity}`
}

console.log(`Weight is ${calcWeight(10)}`)

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = c => { return (c * 9/5) + 32}

console.log(`${convertCelsiusToFahrenheit(30)} Farenheit`)

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function findBMI(weight, height) {
  let bmi = weight / (height * height)
  let group

  if (bmi >= 30) {
    group = 'Obese'
  } else if (bmi >= 25 && bmi < 30) {
    group = 'Overweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    group = 'Normal weight'
  } else {
    group = 'Underweight'
  }

  return `BMI is ${bmi}, group is ${group}`
}

console.log(findBMI(60, 1.8))

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = season => {
  if (season.toLowerCase() == 'september' || season.toLowerCase() == 'october' || season.toLowerCase() == 'november') {
    return 'It\'s Autumn'
  } else if (season.toLowerCase() == 'december' || season.toLowerCase() == 'january' || season.toLowerCase() == 'february'){
    return 'It\'s Winter'
  } else if (season.toLowerCase() == 'march' || season.toLowerCase() == 'april' || season.toLowerCase() == 'may'){
   return 'It\'s Spring'
  } else if (season.toLowerCase() == 'june' || season.toLowerCase() == 'july' || season.toLowerCase() == 'august'){
    return 'It\'s Summer'
  } else {
    alert('The name of the month was typed incorrectly')
  }
}

console.log(checkSeason('july'))

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (...args) => { //As many arguments as you like
  let max = args[0]

  for (const i of args) {
    if (i > max) {
      max = i
    }
  }
  return max
}

console.log(findMax(5, 4, 6, 2, 7))