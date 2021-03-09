"use strict";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

const jadenCase = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof jadenCase, "function");
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(
  jadenCase("Hello woRld hOw aRe yOu?"),
  "Hello World How Are You?"
);
assert.strictEqual(jadenCase("What's up buttercup?"), "What's Up Buttercup?");

// assert.fail('You must write your own tests');
// End of tests */
