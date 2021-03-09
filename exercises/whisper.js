"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const yell = (str) => `*${str.toLowerCase()}*`;

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof yell, "function");
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell("Hello"), "*hello*");
assert.strictEqual(yell("Hello, WORLD!"), "*hello, world!*");

// assert.fail('You must write your own tests');
// End of tests */
