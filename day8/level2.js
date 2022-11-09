//Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let most = users.Alex

for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    if (users[key].skills.length >= most.skills.length) {
      most = users[key]
    }
  }
}

console.log(most)

//Count logged in users, count users having greater than equal to 50 points from the following object.

let loginCount = 0
let manyPointsCount = 0

for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    users[key].isLoggedIn ? loginCount++ : null
    users[key].points >= 50 ? manyPointsCount++ : null
  }
}

console.log(loginCount)
console.log(manyPointsCount)

//Find people who are MERN stack developer from the users object

for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    if (users[key].skills.includes('MongoDB') && users[key].skills.includes('Express') && users[key].skills.includes('React') && users[key].skills.includes('Node')) {
      console.log(`${key} is a Mern developer`)
    }
  }
}

//Set your name in the users object without modifying the original users object

const newUsers = Object.assign({}, users)
newUsers.Fabio = {email: 'fabiogabriel@fake.com', skills: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'C'], age: 20, isLoggedIn: true, points: 50}

//Get all keys or properties of users object

console.log(Object.keys(users))

//Get all the values of users object

console.log(Object.values(users))

//Use the countries object to print a country name, capital, populations and languages.

const countries = {Brazil: {name: 'Brazil', capital: 'Brasilia', population: '200mil', language: 'Portuguese'}, USA: {name: 'United States of America', capital: 'Washington', population: '200mil?', language: 'English'}}

for (const key in countries) {
  if (Object.hasOwnProperty.call(countries, key)) {
    const element = countries[key];
    console.log(element)
  }
}