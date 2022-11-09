//Create an empty object called dog

const dog = {}

//Print the dog object on the console

console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Doggy'
dog.legs = 4
dog.color = 'Grey'
dog.age = 2
dog.bark = function() {
  return 'woof woof'
}

//Get name, legs, color, age and bark value from the dog object

console.log(`name: ${dog.name}, color: ${dog.color}, age: ${dog.age}, bark: ${dog.bark()}`)

//Set new properties the dog object: breed, getDogInfo

dog.breed = 'Yorkshire'
dog.getDogInfo = function() {
  return `name: ${dog.name}, color: ${dog.color}, age: ${dog.age}, bark: ${dog.bark()}, breed: ${dog.breed}`
}