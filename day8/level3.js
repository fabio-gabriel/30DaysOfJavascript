//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: 'Fulano', 
  lastName: 'De Tal', 
  incomes: {
    salary: `Fulano's salary`, 
    shows: 'Money Fulano earns playing guitar'
  }, 
  expenses: {
    living: 'Money Fulano spends in living expenses', 
    addictions: 'Fulano is addicted to guitars', 
    travel: 'He also travels a lot'
  }, 
}

//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users2 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

/*Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. 
b. Create a function called signIn which allows user to sign in to the application
*/

const date = new Date()

const signUp = (id, username, email, password) => {
  users2.push({id, username, email, password, createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`, isLoggedIn: false})
}

const signIn = (user) => {
  for (const key in users2) {
    if (Object.hasOwnProperty.call(users2, key)) {
      const element = users2[key];
      if (element.username == user) {
        element.isLoggedIn = true
      }
    }
  }
}

signIn('Brook')

console.log(users2)

/* The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product 
b. Create a function called averageRating which calculate the average rating of a product */

const rateProduct = (product, rating) => {
  for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
      const element = products[key];
      
      if (element.name == product) {
        element.ratings.push(rating)
        break
      }
    }
  }
}

const averageRating = (product) => {
  for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
      let rating = 0
      const element = products[key];
      
      if (element.name == product) {
        for (const i of element.ratings) {
          rating += i
        }

        return (rating/element.ratings.length)
      }
    }
  }
}

//Create a function called likeProduct. This function will help to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (user, product) => {
  for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
      const element = products[key];
      
      if (element.name == product) {
        element.likes.includes(user) ? element.likes.splice(element.likes.indexOf(user)) : element.likes.push(user)
        break
      }
    }
  }
}