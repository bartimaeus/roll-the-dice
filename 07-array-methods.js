/*
 * Array methods help use interact with arrays
 * more easily. Much of the time you might be writing
 * something only to discover that Array already
 * has a method for that.
 *
 * There is one property I want to mention as well
 * as a few methods of Array.
 *
 * -> Length
 * The property of array that we'll use is called `length`.
 * You can tell by the name what it does, but here's how
 * we use it:
 *
 *    const rolls = [1, 5, 3, 6];
 *    console.log(rolls.length);
 *
 *    => 4
 *
 * Notice that we don't use () when we use length. Length
 * is a property of Array not a method. Methods are functions
 * and need to be invoked using parentheses ().
 *
 * length docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 *
 *
 * -> Push
 * Up next is push. Wait...we already used this. That's right
 * but now you can see that is is part of Array just like
 * random() and round() are part of Math.
 *
 *    const rolls = [4, 5, 2];
 *    console.log(rolls.length);
 *
 *    => 3
 *
 *    rolls.push(3);
 *    // [4, 5, 2, 3]
 *    console.log(rolls.length);
 *
 *    => 4
 *
 * push docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 *
 * -> Map
 * Map is my favorite way to iterate over an array. I find
 * that it is quick to type and it gives me a new array as a return
 * in case I wanted to change my array while I am looping.
 *
 *    const rolls = [1, 5, 3, 6];
 *    rolls.map((roll) => {
 *      console.log(roll);
 *    })
 *
 *    => 1
 *    => 5
 *    => 3
 *    => 6
 *
 * Here is how we'd use a modified array that is returned from map:
 *
 *    const scores = [67, 82, 75, 93];
 *    const passing = scores.map((score) => {
 *      if (score > 72) {
 *        return score;
 *      }
 *      return 'Failed :(';
 *    })
 *
 *    console.log(passing);
 *    => Failed :(
 *    => 82
 *    => 75
 *    => 93
 *
 * We can use other Array methods to clean up or reduce
 * this new array down to only the passing scores, but
 * hopefully you see how we can use map to loop in addition
 * to the for loops we looked at in the last exercise.
 *
 */

function sum(rolls) {
  // TODO: use array's map method instead of forEach
}
