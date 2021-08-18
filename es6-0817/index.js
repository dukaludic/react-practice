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

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

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
