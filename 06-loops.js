/*
 * Loops come in a variety of flavors,
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration.
 *
 * I think for the purposes of our group we should stick
 * with the for, forEach and later array methods for looping.
 *
 * The for loop was the most commonly used loop when
 * I first learned programming in school. It allows
 * you to define how many times to repeat as well as how
 * to increment after each iteration.
 *
 * Let's look at the basic syntax (or grammar/structure) of the
 * for loop and then explain the parts:
 *
 *    for (let i = 0; i < 5; i++) {
 *        console.log(i);
 *    }
 *
 *    => 0
 *    => 1
 *    => 2
 *    => 3
 *    => 4
 *
 * The for loop takes 3 expressions separated by a colon ;.
 *
 * 1. We define our iterator. This is the variable that we
 *    use withing the block {} to tell us the current place
 *    or position of the loop.
 *
 * 2. We define our exit condition. In the example above
 *    the for loop will continue until i >= 10.
 *
 * 3. Lastly, we define our increment operation. This last
 *    expression is a little funny if you haven't seen it before.
 *
 *    i++ is the same as saying i = i + 1
 *
 *    Because we often increment by 1 or decrement by 1
 *    there is a shortcut way of writing this operation
 *
 *      i++ => increment by 1
 *      i-- => decrement by 1
 *
 *    In class we showed how we can count down in a loop by
 *    changing all three expressions.
 *
 *        for (let i = 5; i > 0; i--) {
 *          console.log(i);
 *        }
 *
 *        => 5
 *        => 4
 *        => 3
 *        => 2
 *        => 1
 *
 * The for loop is great when you don't have an object of the right size.
 *
 * for docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 *
 *
 * If we don know the size of an object, then forEach is super handy:
 *
 *    const rolls = [1, 5, 3, 6];
 *    rolls.forEach(function(roll) {
 *      console.log(roll);
 *    })
 *
 *    => 1
 *    => 5
 *    => 3
 *    => 6
 *
 * We can also use the arrow function syntax:
 *
 *    const rolls = [1, 5, 3, 6];
 *    rolls.forEach((roll) => {
 *      console.log(roll);
 *    })
 *
 *    => 1
 *    => 5
 *    => 3
 *    => 6
 *
 * This is an easy way to loop over a known set of objects
 * and have access to the current item of the iteration.
 *
 * forEach docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * There are more array methods we'll cover later, but this
 * should be all you need for the objective.
 *
 *
 * ~> OBJECTIVE:
 *
 * Use a loop to store all of a user's rolls.
 * Then use a loop to calculate the average roll
 * for the user.
 */

const rolls = [];

// Let's copy over the solution you created in 02-functions.js
function roll() {
  // TODO: Do something...
}

// TODO: Roll the dice 12 times
// HINT: use a for loop

// Show the results of the rolls
console.log("User's rolls:");
console.table(rolls);

// TODO: Calculate the average roll

// Let's try and create our own sum and average functions
function sum(rolls) {
  // TODO: add up all of the rolls
  // HINT: use a forEach loop
}

function average(rolls) {
  // TODO: average the rolls
  // HINT: average = (sum / number of rolls)
}

// Display the average roll
const avg = average(rolls);
console.log("Average roll:", avg);
