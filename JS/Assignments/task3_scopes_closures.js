/**
 * Task Set 3: Scopes & Closures
 */

// Task 3.2: Var Loop Problem & Fixes
console.log("--- Task 3.2: Var Loop Problem & Fixes ---");

/**
 * Demonstrates the 'var' loop problem.
 * All timeouts print the same final value of i because var has function scope.
 */
function demonstrateVarLoop() {
    console.log("Starting var loop (demonstrating problem)...");
    for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
            // Explanation: By the time this runs, the loop has finished and i is 4.
            // Since 'i' is shared across all iterations (function scope), all print 4.
            console.log(`Var Loop: i is ${i}`);
        }, 1000);
    }
}

/**
 * Fixes the loop problem using 'let'.
 * 'let' has block scope, so each iteration gets a new 'i'.
 */
function fixVarLoopLet() {
    console.log("Starting let loop (fix 1)...");
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            // Explanation: Each iteration creates a new block scope for 'i'.
            // So each callback captures the correct value (1, 2, 3).
            console.log(`Let Loop: i is ${i}`);
        }, 1000);
    }
}

/**
 * Fixes the loop problem using a closure (IIFE).
 * We pass the current value of 'i' into a function to capture it.
 */
function fixVarLoopClosure() {
    console.log("Starting closure loop (fix 2)...");
    for (var i = 1; i <= 3; i++) {
        (function (capturedI) {
            setTimeout(function () {
                // Explanation: We wrap the setTimeout in an IIFE.
                // 'capturedI' allows us to 'close over' the current value of 'i' for this iteration.
                console.log(`Closure Loop: i is ${capturedI}`);
            }, 1000);
        })(i);
    }
}

// Call the loop functions (Commenting out the problem one to avoid confusion in output logs, or running all)
// demonstrateVarLoop(); // Will print 4, 4, 4
// fixVarLoopLet();      // Will print 1, 2, 3
// fixVarLoopClosure();  // Will print 1, 2, 3


// Task 3.3: Variable Reassignment Demo
console.log("\n--- Task 3.3: Variable Reassignment Demo ---");

/**
 * Demonstrates reassignment of var, let, and const.
 */
function variableReassignmentDemo() {
    console.log("\n[Var]");
    var a = 10;
    console.log("Initial var:", a);
    a = 20; // Works
    console.log("Reassigned var:", a);

    console.log("\n[Let]");
    let b = 10;
    console.log("Initial let:", b);
    b = 20; // Works
    console.log("Reassigned let:", b);

    console.log("\n[Const - Primitive]");
    const c = 10;
    console.log("Initial const:", c);
    try {
        c = 20; // Error!
    } catch (e) {
        console.log("Error reassigning const:", e.message);
    }

    console.log("\n[Const - Object]");
    const obj = { name: "Alice" };
    console.log("Initial const object:", obj);

    // We CAN modify properties of a const object
    obj.name = "Bob";
    console.log("Modified property of const object:", obj);

    try {
        // We CANNOT reassign the object itself
        obj = { name: "Charlie" };
    } catch (e) {
        console.log("Error reassigning const object:", e.message);
    }
}

variableReassignmentDemo();

// Waiting for loops to complete before seeing final output
setTimeout(() => {
    demonstrateVarLoop();
    setTimeout(() => {
        fixVarLoopLet();
        setTimeout(() => {
            fixVarLoopClosure();
        }, 4000);
    }, 4000);
}, 2000);
