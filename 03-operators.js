/*
 * Operators allow us to perform arithmetic, comparisons,
 * concatenation, and more
 *
 *
 * Arithmetic
 *
 *    4 + 5 => 9    // addition
 *    4 - 6 => -2   // subtraction
 *    4 * 5 => 20   // multiplication
 *    4 / 2 => 2    // division
 *    4 ** 2 => 16  // exponent
 *    4++ => 5      // increment
 *    4-- => 3      // decrement
 *
 *
 * Assignment
 *
 * Assignement operators are pretty straight forward. We
 * use one every time we assign or create a variable.
 *
 *    const name = 'Eric';
 *
 * We also have assignment operators for common operations.
 * If we have a sum and we want to continue to add to the
 * sum we often do something like this:
 *
 *    let sum = 0;
 *    const value = roll();
 *    sum = sum + value;
 *
 * Here is where an assignment operator can help:
 *
 *    let sum = 0;
 *    const value = roll();
 *    sum += value;
 *
 * For these very common operations of replacing a value with
 * an operation on that value we have assignment operators:
 *
 *    x += y => x = x + y
 *    x -= y => x = x - y
 *    x *= y => x = x * y
 *    x /= y => x = x / y
 *
 *
 * Comparisons
 *
 * Equal (==)
 *    3 == '3'
 *
 * Not equal (!=)
 *    4 != '3'
 *
 * Strict equal (===) - equal when both are same value and type
 *    4 === 2 * 2
 *
 * Strict not equal (!==) - both type and/or value are not equal
 *    4 !== '4'
 *
 * Greater than (>)
 *    4 > 2
 *
 * Greater than or equal (>=)
 *    4 >= 2 + 2
 *
 * Less than (<)
 *    2 < 3
 *
 * Less than or equal (<=)
 *    2 <= 1 + 1
 *
 *
 * Logical Operators
 *
 * Logical operators are used a lot in control flow (if/then).
 *
 * AND (&&)
 *    true && true
 *    => true
 *
 * OR (||)
 *    false || true
 *    => true
 *
 *    true || false
 *    => true
 *
 *    false || false
 *    => false
 *
 * NOT (!)
 *    !false
 *    => true
 *
 *    !true
 *    => false
 *
 *
 * Concatentation
 *
 * This is super helpful if you are trying to create a
 * string from many parts:
 *
 *    const score = 89;
 *    const display = "Your score is " + 89;
 *    console.log(display);
 *    => "Your score is 89"
 *
 *    const fullName = "First" + " " + "Last";
 *    console.log(fullName);
 *    => "First Last"
 *
 *
 * Conditional (ternary) operator
 *
 * When we get more into the next lesson then this will
 * help you write more concise if/then/else structures
 *
 *    condition ? response : else response
 *
 *    const age = 22;
 *    const status = (age >= 18) ? 'adult' : 'minor';
 *    console.log(status);
 *    => "adult"
 *
 * expressions and operations docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 */

// TODO: create a few operations in your Chrome developer console.
