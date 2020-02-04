let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'James';
user['lastName'] = 'Ford';
user['currentLocation'] = 'Ohio';
user['favoriteSongs'] = ['One Song', 'Another Great Song', 'Last Great Song'];
user['age'] = 108;
user['favoriteFood'] = 'Pizza';
user['favoriteMovies'] = ['Conjuring', 'Titanic', 'Avengers'];

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}

console.log('Looks like you have great taste in music. Your favorite songs:');
printFavorites(user['favoriteSongs']);

console.log('You have great taste. Your favorite movies are: ')

printFavorites(user['favoriteMovies']);

function printFavorites(array){

  for(let i = 0; i < array.length;i++){
    let favoritePosition = i + 1;
    let itemName = array[i];

    console.log(`${favoritePosition}. ${itemName}`);

  }
}
