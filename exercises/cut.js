"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => str.slice(2);

const cutLast = (str) => str.slice(0, - 2);

const cutFirstLast = (str) => str.slice(2, - 2);

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst("123456789"), "3456789");
assert.strictEqual(cutFirst(""), "");

assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast("123456789"), "1234567");
assert.strictEqual(cutLast(""), "");

assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast("123456789"), "34567");
assert.strictEqual(cutFirstLast(""), "");

// assert.fail('You must write your own tests');
// End of tests */
