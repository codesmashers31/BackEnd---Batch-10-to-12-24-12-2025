/**
 * Task 5: BigInt vs Number (Int)
 * 
 * This file explains the difference between standard Numbers (integers) and BigInts in JavaScript,
 * and how to handle them correctly.
 */

console.log("--- 1. The Limit of Normal Numbers ---");

// Standard JavaScript numbers are 64-bit floating point numbers (IEEE 754).
// They have a maximum safe integer limit. Beyond this, calculations lose precision.
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(`Max Safe Integer: ${maxSafe} (2^53 - 1)`);

// Demonstration of precision loss
const unsafe1 = maxSafe + 1;
const unsafe2 = maxSafe + 2;
console.log(`Max + 1: ${unsafe1}`); // 9007199254740992
console.log(`Max + 2: ${unsafe2}`); // 9007199254740992 (Notice it's the SAME! Precision lost)
console.log(`Are they equal? ${unsafe1 === unsafe2}`); // true (Incorrect math due to overflow)


console.log("\n--- 2. Introducing BigInt ---");

// BigInt is a special numeric type that offers arbitrary precision.
// You can create it by appending 'n' to an integer literal or calling BigInt().
const bigInt1 = 9007199254740991n;
const bigInt2 = BigInt(9007199254740991);

// Operations with BigInt preserve precision beyond the safe limit
const precise1 = bigInt1 + 1n;
const precise2 = bigInt1 + 2n;

console.log(`BigInt Max + 1: ${precise1}`); // 9007199254740992n
console.log(`BigInt Max + 2: ${precise2}`); // 9007199254740993n (Correct!)
console.log(`Are they equal? ${precise1 === precise2}`); // false (Math is correct)


console.log("\n--- 3. Handling Mixed Types & Errors ---");

const regularNum = 10;
const bigNum = 10n;

// Strict Equality
// BigInt and Number are different types, so strict equality (===) returns false.
console.log(`10 === 10n? ${regularNum === bigNum}`); // false

// Loose Equality
// Loose equality (==) attempts type coercion, so it returns true.
console.log(`10 == 10n? ${regularNum == bigNum}`); // true

// Math Operations - The "TypeError" Trap
console.log("Attempting mixed math (10 + 10n)...");
try {
    // You CANNOT mix BigInt and Number directly in math operations.
    // JavaScript throws an error to avoid ambiguous results (should result be BigInt or Number?).
    const result = regularNum + bigNum;
} catch (error) {
    console.log(`Error caught: ${error.message}`);
    // Output: TypeError: Cannot mix BigInt and other types, use explicit conversions
}


console.log("\n--- 4. How to Handle Mixed Types Correctly ---");

// Strategy 1: Convert everything to BigInt (Precision is priority)
// Use this when working with large IDs, financial calculations, or cryptography.
const sumAsBigInt = BigInt(regularNum) + bigNum;
console.log(`Sum as BigInt: ${sumAsBigInt}n`); // 20n

// Strategy 2: Convert BigInt to Number (Compatibility is priority)
// WARNING: Only do this if you are SURE the BigInt is within the safe number range.
// Otherwise, you will lose precision again.
const sumAsNumber = regularNum + Number(bigNum);
console.log(`Sum as Number: ${sumAsNumber}`); // 20


console.log("\n--- 5. Key Takeaways ---");
console.log("1. Use 'Number' for standard logic, array indices, and loop counters.");
console.log("2. Use 'BigInt' for values larger than 2^53 - 1 (IDs, timestamps, crypto).");
console.log("3. Do NOT mix them in math operations (+, -, *, /).");
console.log("4. Explicitly convert types before operating: BigInt(num) or Number(big).");
