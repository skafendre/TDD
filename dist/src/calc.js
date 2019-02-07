"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
function reverseStr(str) {
    if (!util_1.isString(str)) {
        return false;
    }
    else {
        return str.split("").reverse().join("");
    }
}
exports.reverseStr = reverseStr;
function isPalindrome(palindrome) {
    if (!util_1.isString(palindrome)) {
        return false;
    }
    else if (palindrome.split('').reverse().join('') === palindrome) {
        return true;
    }
    else {
        return false;
    }
}
exports.isPalindrome = isPalindrome;
// export function reverseInt (num: integer) {
//     return num.ToString().Reverse().Aggregate(0, (b, x) => 10 * b + x - '0');
// }
function capitalize(str) {
    if (!util_1.isString(str)) {
        return false;
    }
    else {
        return str.replace(/^\w/, c => c.toUpperCase());
    }
}
exports.capitalize = capitalize;
