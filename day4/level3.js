//Write a program which tells the number of days in a month.

let month = prompt('Type in the month')

switch (month.toLowerCase()) {
  case 'january':
    alert(`${month} has 31 days`)
    break;
  case 'february':
    alert(`${month} has 28 days`)
    break;
  case 'march':
    alert(`${month} has 31 days`)
    break;
  case 'april':
    alert(`${month} has 30 days`)
    break;
  case 'may':
    alert(`${month} has 31 days`)
    break;
  case 'june':
    alert(`${month} has 30 days`)
    break;
  case 'july':
    alert(`${month} has 31 days`)
    break;
  case 'august':
    alert(`${month} has 31 days`)
    break;
  case 'september':
    alert(`${month} has 30 days`)
    break;
  case 'october':
    alert(`${month} has 31 days`)
    break;
  case 'november':
    alert(`${month} has 30 days`)
    break;
  case 'december':
    alert(`${month} has 31 days`)
    break;
  default:
    break;
}

//Write a program which tells the number of days in a month, now consider leap year.

let year = prompt('Type in the year')

if (month.toLowerCase() == 'february' && year % 4 == 0) { // If it's february and a leap year
  
  alert(`${month} has 29 days`)
  
} else {
    switch (month.toLowerCase()) {
      case 'january':
        alert(`${month} has 31 days`)
        break;
      case 'february':
        alert(`${month} has 28 days`)
        break;
      case 'march':
        alert(`${month} has 31 days`)
        break;
      case 'april':
        alert(`${month} has 30 days`)
        break;
      case 'may':
        alert(`${month} has 31 days`)
        break;
      case 'june':
        alert(`${month} has 30 days`)
        break;
      case 'july':
        alert(`${month} has 31 days`)
        break;
      case 'august':
        alert(`${month} has 31 days`)
        break;
      case 'september':
        alert(`${month} has 30 days`)
        break;
      case 'october':
        alert(`${month} has 31 days`)
        break;
      case 'november':
        alert(`${month} has 30 days`)
        break;
      case 'december':
        alert(`${month} has 31 days`)
        break;
      default:
        break;
  }
}