"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => str.slice(0, 2);

const keepLast = (str) => str.slice(str.length - 2, str.length);

const keepFirstLast = (str) =>
  str.slice(0, 2) + str.slice(str.length - 2, str.length);

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst("123456789"), "12");
assert.strictEqual(keepFirst(""), "");

assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast("123456789"), "89");
assert.strictEqual(keepLast(""), "");

assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast("123456789"), "1289");
assert.strictEqual(keepFirstLast(""), "");
// assert.fail('You must write your own tests');
// End of tests */
