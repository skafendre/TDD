import {isString} from "util";

export function reverseStr(str: string) {
    if (!isString(str)) {
        return false;
    } else {
        return str.split("").reverse().join("");
    }
}

export function isPalindrome (palindrome: string) {
    if (!isString(palindrome)) {
        return false;
    } else if (palindrome.split('').reverse().join('') === palindrome) {
        return true;
    } else {
        return false;
    }
}

// export function reverseInt (num: integer) {
//     return num.ToString().Reverse().Aggregate(0, (b, x) => 10 * b + x - '0');
// }

export function capitalize (str: string) {
    if (!isString(str)) {
        return false;
    } else {
        return str.replace(/^\w/, c => c.toUpperCase());
    }
}