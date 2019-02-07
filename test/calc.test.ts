import {capitalize, isPalindrome, reverseStr} from "../src/calc";

// 1 reverse string
test("reverseStr isDefined", () => {
    expect(reverseStr("test string")).toBeDefined();
});

test("reverseStr doesItWorkWithStr", () => {
    expect(reverseStr("test")).toBe("tset");
});


test("reverseStr does it reject non string parameters", () => {
    expect(reverseStr(7)).toBeFalsy();
});


// 2 palindromes
test("palindromes doesItWorkWithStr", () => {
    expect(isPalindrome("teset")).toBeTruthy();
});

test("palindromes works if param is not a paindrome", () => {
    expect(isPalindrome("test")).toBeFalsy();
});

test("palindromes does it reject non string parameters", () => {
    expect(isPalindrome(7)).toBeFalsy();
});

// 3 reverse int
// test("reverse int, works", () => {
//     expect(reverseInt(789)).toBe(987);
// });


// 4 capitalize
test ("does capitalize capitalize, param is a string", () => {
   expect(capitalize("test")).toBe("Test");
});

test ("does capitalize skip a non string", () => {
    expect(capitalize(4)).toBeFalsy;
});

