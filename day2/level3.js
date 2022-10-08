//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

console.log(('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi)).length, 'instances of the word love in the sentence')
//.match(/love/gi) uses a regex to return an array with all instances of the word love. g means search entire string, i means its a case insensitive search

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(('You cannot end a sentence with because because because is a conjunction'.match(/because/gi)).length, 'instances of the word because in the sentence')

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence2.replace(/[^a-zA-Z ]/g, '')) //regex allows a-z, A-Z and whitespace (Whitespace after A-Z)

let array = sentence2.replace(/[^a-zA-Z ]/g, '').split(' ')

let map = {}
let mostWord = array[0]
let count = 1

for (let index = 0; index < array.length; index++) {
  
  let word = array[index]

  if (map[word] == null){ //If the word isn't in the map, its added with the value 1, as it appeared one time
    map[word] = 1
  } else { //Adds to the value of appearences in the map
    map[word]++
  }

  if (map[word] > count){ // Substitutes maxWord if the current word has more appearences
    mostWord = word
    count = map[word]
  }
}

console.log(mostWord) // Should return I or teaching, as they appear 3 times each

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let numbers = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.replace(/[a-zA-Z .]/g, '').split(',')

let sum = 0

numbers.forEach(element => {
  sum += parseInt(element)
});

console.log(sum)