/**
 * Task Set 2: Truthy & Falsy
 */

// Task 2.1: Check Truthy/Falsy
console.log("--- Task 2.1: Check Truthy/Falsy ---");

/**
 * Checks if a value is truthy or falsy.
 * @param {any} value - The value to check.
 * @returns {string} - "truthy" or "falsy".
 */
function checkTruthyFalsy(value) {
    // Explanation: In JavaScript, we can use the Boolean() function or the double negation operator !! to convert a value to a boolean.
    // If the boolean conversion is true, it's truthy; otherwise, it's falsy.
    return value ? "truthy" : "falsy";
}

const testValues = [0, "", null, undefined, [], {}, false, "hello"];
testValues.forEach(val => {
    console.log(`Value: ${JSON.stringify(val)}, Result: ${checkTruthyFalsy(val)}`);
});


// Task 2.2: Filter Truthy Values
console.log("\n--- Task 2.2: Filter Truthy Values ---");

/**
 * Filters an array to return only truthy values.
 * @param {any[]} arr - An array of mixed values.
 * @returns {any[]} - An array containing only the truthy values.
 */
function filterTruthy(arr) {
    // Explanation: The filter method iterates over the array.
    // We pass a callback function that returns the value itself (or Boolean(value)).
    // If the value is truthy, it's kept in the new array.
    return arr.filter(value => value);
}

const mixedValues = [0, "hello", "", null, 42, undefined, "world", false, true];
console.log("Mixed Values:", mixedValues);
console.log("Truthy Values:", filterTruthy(mixedValues));


// Task 2.3: Name Formatter
console.log("\n--- Task 2.3: Name Formatter ---");

/**
 * Formats a name based on the presence of first, last, and nickname.
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} nickname 
 * @returns {string} - The formatted name.
 */
function formatName(firstName, lastName, nickname) {
    // Explanation: We check the truthiness of firstName and lastName.
    // If both exist, we combine them.
    // If only firstName exists (lastName is falsy), we return firstName.
    // If both are falsy, we check nickname.
    // If all are falsy, we return "Anonymous".

    if (firstName && lastName) {
        return `${firstName} ${lastName}`;
    } else if (firstName) {
        return firstName;
    } else if (nickname) {
        return nickname;
    } else {
        return "Anonymous";
    }
}

console.log("John, Doe, Johnny:", formatName("John", "Doe", "Johnny")); // John Doe
console.log("John, null, Johnny:", formatName("John", null, "Johnny")); // John
console.log("null, null, Johnny:", formatName(null, null, "Johnny")); // Johnny
console.log("null, null, null:", formatName(null, null, null)); // Anonymous
