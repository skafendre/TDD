"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../src/calc");
// 1 reverse string
test("reverseStr isDefined", () => {
    expect(calc_1.reverseStr("test string")).toBeDefined();
});
test("reverseStr doesItWorkWithStr", () => {
    expect(calc_1.reverseStr("test")).toBe("tset");
});
test("reverseStr does it reject non string parameters", () => {
    expect(calc_1.reverseStr(7)).toBeFalsy();
});
// 2 palindromes
test("palindromes doesItWorkWithStr", () => {
    expect(calc_1.isPalindrome("teset")).toBeTruthy();
});
test("palindromes works if param is not a paindrome", () => {
    expect(calc_1.isPalindrome("test")).toBeFalsy();
});
test("palindromes does it reject non string parameters", () => {
    expect(calc_1.isPalindrome(7)).toBeFalsy();
});
// 3 reverse int
// test("reverse int, works", () => {
//     expect(reverseInt(789)).toBe(987);
// });
// 4 capitalize
test("does capitalize capitalize, param is a string", () => {
    expect(calc_1.capitalize("test")).toBe("Test");
});
test("does capitalize skip a non string", () => {
    expect(calc_1.capitalize(4)).toBeFalsy;
});
