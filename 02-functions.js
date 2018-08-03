/*
 * A function is a way for us to create a repeatable
 * behavior. We might have a function for adding two
 * numbers:
 *
 *    function add(a, b) {
 *      return a + b;
 *    }
 *
 * Composition of a function:
 * 1. We use the keyword `function` to declare a function.
 *
 * 2. We can then give the function a name so that we can
 *    easily remember and use it later.
 *
 * 3. We pass in parameters or values we want to use in our
 *    repeatable function using parentheses ().
 *
 * 4. We use curly braces {} to create a wrapper around the
 *    code we want to execute. This is often called a block.
 *
 * 5. Lastly, we can use the keyword `return` to send back
 *    the result of the function.
 *
 * Here is how we call or invoke the `add` function:
 *
 *    add(4, 5)
 *
 * You can see the results by logging the function to the console:
 *
 *    console.log(add(4, 5))
 *
 * Here is a great time to create a variable:
 *
 *    const sum = add(4, 5)
 *    console.log(sum)
 *
 * function docs: https://developer.mozilla.org/en-US/docs/Glossary/Function
 *
 *
 * ALTERNATE VERSION:
 *
 * Just like `const` and `let` replaced how we created
 * variables with `var`. There is a new way to create
 * a function called arrow functions. I debated including
 * this, but you might see it and you should know what
 * it looks like.
 *
 * Original, and still valid:
 *
 *    function add(a, b) {
 *      return a + b
 *    }
 *
 * Can also look like this:
 *
 *    (a, b) => {
 *        return a + b
 *    }
 *
 * We drop the keyword `function` in favor of a simpler syntax
 * where we present the arguments first in parantheses ()
 * followed by and arrow =>. After the arrow we use our curley
 * braces in order to create the block we want to execute.
 *
 * If we are able to simply return a value, we can omit
 * the curly braces {} and the keyword `return`:
 *
 *    (a, b) => a + b
 *
 * We call this last function example an implicit return.
 * We assume that if there is not a block (curly braces)
 * that the function should just return whatever comes
 * after the arrow.
 *
 * One last thing, we can still assign a name to arrow
 * functions. We just assign our arrow function to a variable:
 *
 *    const add = (a, b) => a + b
 *
 * arrow function docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 *
 * ~> OBJECTIVE:
 *
 * We are going to write a function called roll.
 * Roll should simulate a player rolling a dice.
 * It should return a random number between 1-6.
 *
 * The method will be invoked as follows:
 *   roll()
 *
 * HINTS:
 * 1. Roll will need to generate a random number.
 *    A good way to do that is do call another function
 *    that is built into JavaScript called Math.random().
 *    Math.random() will generate a random decimal
 *    between 0-1 (0.234523, 0.64343, 0.923432, etc.)
 *
 *        Math.random() => 0.23452
 *        Math.random() => 0.89823
 *        Math.random() => 0.12124
 *
 *    Math.random() docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * 2. We need whole numbers, so a good thing to do would
 *    be to round any numbers you get to a whole number.
 *    Math.round() is another built in JavaScript
 *    function that takes a number and will return the
 *    value rounded to the nearest whole number:
 *
 *        Math.round(3.14159) => 3
 *        Math.round(4.49)    => 4
 *        Math.round(4.5)     => 5
 *
 *    Math.round docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 *
 * 3. Make sure that all of your rolls are between 1-6.
 *    You may find that are of your rolls consistently return
 *    between 0-5. Think about a way to increase this range
 *    so that 1-6 are returned from roll instead of 0-5.
 */
function roll() {
  // TODO: Do something...
  return 0; // it is good practice to return from a function.
}

// Roll the dice!
roll();

// We can see the value of the dice by logging the value to the console:
console.log(roll());

// Or...we can save the value of the role to a variable and log the variable to the console:
const value = roll();
console.log(value);
