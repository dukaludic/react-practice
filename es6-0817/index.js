"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};

// Challenge #3

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
// GOOD LUCK 😀
// */

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event hannepend every ${time / gameEvents.size} minutes on average`
);

for (const [i, j] of gameEvents) {
  const str = i < 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${str} ${i}: ${j}`);
}

// // Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property values
// const values = Object.values(openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Coding challenge #1

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const question = new Map([
//   ["question", "What is the best programming language?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again"],
// ]);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// // Quizz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer"));
// // question.get("correct") === answer
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false));

// console.log(question.get(question.get("correct") === answer));

// // Conver map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log(question.keys());
// console.log(question.values());
// const rest = new Map();

// rest.set("name", "Classico Italiano");
// rest.set(1, "Firence, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// // console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2); // 2 is key
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, "Test");

// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr)); // Undefined if [1,2]

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("Jonas"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Bread"));
// console.log(ordersSet.has("Pizza"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)]; // makes an array
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"].size)
// );

// console.log(new Set("jonassschmedtmann").size);

// Challenge 2

// const { scored } = game;

// for (let [i, j] of scored.entries()) {
//   console.log(`Goal ${i}: ${j}`);
// }

// let averageOdd = 0;
// const odds = Object.values(game.odds);
// let sum = 0;

// for (let item of odds) {
//   sum += item;
// }
// averageOdd = sum / odds.length;
// console.log(averageOdd);

// for (let [odd, team] of Object.entries(game.odds)) {
//   let str = odd === "x" ? `draw` : `victory`;

//   console.log(`Odds of ${str} by ${team}: ${odd}`);
// }

// const scorers = {};
// // console.log(sco);

// for (let i of scored) {
//   scorers[i] ? scorers[i]++ : (scorers[i] = 1);
// }

// console.log(scorers);

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2, "aasdf");

// function printGoals(...goals) {
//   console.log(goals);
//   console.log(`${goals.length} goals were scored`);
// }

// team1 < team2 && console.log("team1 is more likely to win");

// team1 > team2 && console.log("team2 is more likely to win");

// // const { scored } = game;
// // console.log(scored, "scored");
// printGoals(...game.scored);

// console.log(players1Final);
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// //OPTIONAL chaining 2020 //////////////////////
// if (restaurant.openingHours && restaurant.openingHours.fri.open) {
//   console.log(restaurant.openingHours.fri.open);
// }

// console.log(restaurant.openingHours.mon?.open);
// //example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day} is opened at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");

// // arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.email ?? "User doesn't exist");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// for (const )

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (no other)
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//Short circuiting use any data type, return any data type
// console.log("---------OR-------");
// console.log(3 || "Jonas"); //3
// console.log("" || "Jonas"); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); //null

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---------AND-------");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("hello" && 23 && null && "Jonas");

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza("mushrooms", "spinach");
// // }

// // execute code from 2nd operand
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "olives", "onions", "spinach");
// restaurant.orderPizza("mushrooms");

// REST
//spread because on the right side of =
// const arr = [1, 2, ...[3, 4]]

// // Rest because on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(pizza, risotto, otherFood);

//  Spread Objects
// const newRestaurant = {foundedIb: 1995, ...restaurant, founder: 'Guiseppe'}

// console.log(newRestaurant)

//real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3')]

// restaurant.orderPasta(...ingredients)

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// // Iterables are arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];

// console.log(letters)
// console.log(...str)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]

// const newArr = [1, 2, ...arr]
// console.log(newArr)
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//spread doesn't create new variables and can you can only use it in places when values are separated by commas

////////////////////////////////////////////////
// Desctructuring Objects

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via Del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2
// });

// restaurant.orderDelivery({
//     address: 'Via Del Sole, 21',
//     starterIndex: 2
// });

// const {name, openingHours,  categories} = restaurant;

// console.log(name, openingHours,  categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

// console.log(restaurantName, hours,  tags);

// // Default variables
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters)

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b)

// // Nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c)

// const arr = [2,3,4]
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z)

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// let [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// // const [i, ,j] = nested;

// // console.log(i,j);

// const [i, ,[j, k]] = nested;

// console.log(i,j,k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8]

// console.log(p,q,r);

////////////////////////////////////////////////
