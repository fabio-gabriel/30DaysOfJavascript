//Write a code which can give grades to students according to theirs scores: 

let grade = 70

if (grade >= 90) {
  console.log('Grade is A')
} else if (70 <= grade && grade < 90){
  console.log('Grade is B')
} else if (60 <= grade && grade < 70){
  console.log('Grade is C')
} else if (50 <= grade && grade < 60){
  console.log('Grade is D')
} else {
  console.log('Grade is F')
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is : 

let season = prompt('Type in the month: ')

if (season.toLowerCase() == 'september' || season.toLowerCase() == 'october' || season.toLowerCase() == 'november') {
  console.log('It\'s Autumn')
} else if (season.toLowerCase() == 'december' || season.toLowerCase() == 'january' || season.toLowerCase() == 'february'){
  console.log('It\'s Winter')
} else if (season.toLowerCase() == 'march' || season.toLowerCase() == 'april' || season.toLowerCase() == 'may'){
  console.log('It\'s Spring')
} else if (season.toLowerCase() == 'june' || season.toLowerCase() == 'july' || season.toLowerCase() == 'august'){
  console.log('It\'s Summer')
} else {
  alert('The name of the month was typed incorrectly')
}

//Check if a day is weekend day or a working day. Your script will take day as an input.

let weekDay = prompt('Type in the day: ')

if (weekDay.toLowerCase == 'saturday' || weekDay.toLowerCase == 'sunday') {
  alert(`${weekDay} is a weekend`)
} else if (weekDay.toLowerCase == 'monday' || weekDay.toLowerCase == 'tuesday' || weekDay.toLowerCase == 'wednesday' || weekDay.toLowerCase == 'thursday' || weekDay.toLowerCase == 'saturday') {
  alert(`${weekDay} is a working day`)
}