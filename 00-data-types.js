/*
 * The core building blocks of JavaScript are the data types we use (we call
 * them primitives). Whether we need to create a calculator or a website you'll
 * need these primitives to represent a value.
 *
 * Below are basic data types in Javascript.
 * Primitive docs: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * ~> OBJECTIVE:
 *
 * Create a few primitives in your Chrome DevTools or on jsbin.com
 */

// String - https://developer.mozilla.org/en-US/docs/Glossary/string
"The brown fox jumps over the lazy dog.";

// Number - https://developer.mozilla.org/en-US/docs/Glossary/number
42;
3.14159 - 1;
0;

// Boolean - https://developer.mozilla.org/en-US/docs/Glossary/boolean
true;
false;

// Null - https://developer.mozilla.org/en-US/docs/Glossary/null
null;

// undefined - https://developer.mozilla.org/en-US/docs/Glossary/undefined
undefined;

// You can test these types in jsbin. `typeof` is a function we can call
// in JavaScript that tell us the JavaScript type of the value.
// Try it out in your Chrome DevTools,
// https://developers.google.com/web/tools/chrome-devtools/javascript/:

// typeof "Hello!"  => "string"
// typeof 302       => "number"
// typeof true      => "boolean"
// typeof null      => "object"
// typeof undefined => "undefined"

/*
 * COMMENTS!
 */
// Not realated to primitives, but nice to know are JavaScript comments.
// Comments allow us to add descriptions, notes, or instructions
// about the code we write.

// The browser or JavaScript interpreter will ignore our comments.

/* Single line comment */
// You'll see that I am using a lot of comments in these files.
// You can use the traditional single line comments by adding two
// forward slashes // before the comment you make.

/* Single line comment after code */
5 + 4; // Don't execute this comment. Just making a quick note.

// Multi-line comments use /* */ to wrap your comment
/*
  Here is a multiline comment.
  You don't have to worry about adding // at the beginning
  of every line.

  Here we go again...
 */
