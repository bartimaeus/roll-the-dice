/*
 * Arrays are ordered collections of data. The data
 * stored in an array can be a number, string, object,
 * and more.
 *
 * Here are some array examples:
 *
 *    const pushUpsEachDay = [6, 10, 5, 12, 8]
 *
 *    const dogNames = ['Snuffles', 'Butch', 'Yeah you']
 *
 *    const cars = [
 *      { manufacturer: 'Shelby', model: 'Cobra', year: 1969 },
 *      { manufacturer: 'Ford', model: 'Mustang', year: 2015 },
 *      { manufacturer: 'Chevy', model: 'Camaro', year: 1971 },
 *    ]
 *
 * We can access data in an array by using square brackets []
 * and the index of the array element:
 *
 * dogNames[1] => 'Butch'
 *
 * Arrays allow you to access the data at any given point in
 * their collection by using the index that corresponds with
 * the location of the data. Arrays are base 0. This means
 * that the index (number used to reference the data)
 * begins at 0. Here is an example of array indexes:
 *
 *         0          1          2
 *    ['Snuffles', 'Butch', 'Yeah you']
 *
 * So,
 *    dogNames[0] => 'Snuffles'
 *
 * and
 *    dogNames[2] => 'Yeah you'
 *
 * Array docs: https://developer.mozilla.org/en-US/docs/Glossary/array
 *
 *
 * ~> OBJECTIVE:
 *
 * Use an array to store all of a user's rolls.
 */

// We can create an empty array to store all of the rolls
// for a user. As the user rolls we'll add the value to this
// array.
const rolls = [];

// Let's copy over the solution you created in 02-functions.js
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
 * on an array. For example,
 *
 * rolls => []
 * rolls.push(2)
 * rolls => [2]
 * rolls.push(5)
 * rolls => [2, 5]
 * rolls.push(1)
 * rolls => [2, 5, 1]
 */

// TODO: store each roll in the rolls array

// Show the results of each roll
// HINT: You can use console.log()

// If you want to see something cool with arrays,
// then open the Chrome developer console, then try:
//   console.table(rolls)
