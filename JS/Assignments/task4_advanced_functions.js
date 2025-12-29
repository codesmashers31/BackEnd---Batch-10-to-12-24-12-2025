/**
 * Task Set 4: Advanced Functions
 */

// Task 4.1: Function Factory (Multiplier)
console.log("--- Task 4.1: Function Factory (Multiplier) ---");

/**
 * Creates a multiplier function.
 * @param {number} multiplier - The number to multiply by.
 * @returns {function} - A function that accepts a number and returns the product.
 */
function createMultiplier(multiplier) {
    // Explanation: This uses a closure. The returned function 'remembers' the 'multiplier' value
    // from when createMultiplier was called, even after createMultiplier has finished executing.
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("Double 10:", double(10)); // 20


// Task 4.2: Private Password (Closure)
console.log("\n--- Task 4.2: Private Password (Closure) ---");

/**
 * Creates an object with methods to manage a private password.
 * @returns {Object} - Object with setPassword and checkPassword methods.
 */
function secretPassword() {
    // Explanation: 'password' is a local variable inside this function.
    // It is NOT accessible directly from outside.
    // The returned object's methods close over this variable, allowing controlled access.
    let password = "default";

    return {
        setPassword: function (newPass) {
            password = newPass;
            console.log("Password updated successfully.");
        },
        checkPassword: function (guess) {
            return guess === password;
        }
    };
}

const mySecret = secretPassword();
console.log("Is pass '123'?", mySecret.checkPassword("123")); // false
mySecret.setPassword("superSecret");
console.log("Is pass 'superSecret'?", mySecret.checkPassword("superSecret")); // true

// Trying to access password directly fails (undefined) because it's private
console.log("Direct access attempt:", mySecret.password);


// Task 4.3: One-time Function
console.log("\n--- Task 4.3: One-time Function ---");

/**
 * Wraps a function so it can only be called once.
 * @param {function} fn - The function to wrap.
 * @returns {function} - A new function that runs 'fn' only on the first call.
 */
function once(fn) {
    // Explanation: We use a closure 'hasRun' to track if the function has been executed.
    // 'result' stores the return value of the first execution to return it on subsequent calls.
    let hasRun = false;
    let result;

    return function (...args) {
        if (!hasRun) {
            hasRun = true;
            result = fn.apply(this, args); // Execute the original function
        }
        return result;
    };
}

// Test callback
const init = () => {
    console.log("Initialization logic running...");
    return "Initialized!";
};

const initializeOnce = once(init);

console.log("Call 1:", initializeOnce()); // Runs logic
console.log("Call 2:", initializeOnce()); // Returns result without running logic
console.log("Call 3:", initializeOnce()); // Returns result without running logic
