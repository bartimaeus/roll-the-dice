/*
 * Arrays are ordered collections of data. The
 * data in an array can be numbers, strings, objects,
 * and more.
 *
 * Here are some array examples:
 *
 * const pushUpsEachDay = [6, 10, 5, 12, 8]
 * const dogNames = ['Snuffles', 'Butch', 'Yeah you']
 * const cars = [
 *   { manufacturer: 'Shelby', model: 'Cobra', year: 1969 },
 *   { manufacturer: 'Ford', model: 'Mustang', year: 2015 },
 *   { manufacturer: 'Chevy', model: 'Camaro', year: 1971 },
 * ]
 *
 * When we want to access data in an array we do so using
 * square brackets:
 *
 * dogNames[1] => 'Butch'
 *
 * Arrays are base 0. This means that each element of an array
 * has a number but the numbering begins at 0.
 *
 *      0          1          2
 * ['Snuffles', 'Butch', 'Yeah you']
 *
 * So, dogNames[0] => 'Snuffles'
 * and dogNames[2] => 'Yeah you'
 *
 * Array docs: https://developer.mozilla.org/en-US/docs/Glossary/array
 *
 *
 * ~> OBJECTIVE:
 *
 * Use an array to store all of a user's dice rolls.
 */

// We can create an empty array to store all of the rolls
// for a user. As the user rolls we'll add the role to this
// array.
const rolls = [];

// Let's copy over the solution you created in 02-functions.js
// to this function
function roll() {
  // TODO: Do something...
}

// Roll the dice 5 times
roll();
roll();
roll();
roll();
roll();

/*
 * Adding to an array happens by calling the push() function
 *
 *
 * For example,
 *
 * roles => []
 * rolls.push(roll())
 * roles => [2]
 * rolls.push(roll())
 * roles => [2,5]
 */

// TODO: store each roll in the roles array

// Show us the results of each roll
// HINT: You can use console.log()
