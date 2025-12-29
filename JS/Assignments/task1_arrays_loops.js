/**
 * Task Set 1: Arrays & Loops
 */

// Task 1.1: Filter even numbers
console.log("--- Task 1.1: Filter Even Numbers ---");

/**
 * Filters an array to return only even numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number[]} - An array containing only even numbers.
 */
function filterEvenNumbers(arr) {
    // Explanation: Using a for loop to iterate through the array.
    // If the number % 2 is 0, it means it's even, so push it to the new array.
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Input:", numbers);
console.log("Even Numbers:", filterEvenNumbers(numbers));


// Task 1.2: Day of the week switch
console.log("\n--- Task 1.2: Day of the Week Switch ---");

/**
 * Returns the day of the week based on a number (1-7).
 * @param {number} dayNum - The number representing the day (1 = Monday, etc.).
 * @returns {string} - The name of the day or an error message.
 */
function getDayOfWeek(dayNum) {
    // Explanation: Using a switch statement to match the input number to a day.
    // The default case handles invalid inputs.
    let day;
    switch (dayNum) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid input! Please enter a number between 1 and 7.";
    }
    return day;
}

console.log("Day 1:", getDayOfWeek(1));
console.log("Day 5:", getDayOfWeek(5));
console.log("Day 8 (Invalid):", getDayOfWeek(8));


// Task 1.3: Grade Category Counter
console.log("\n--- Task 1.3: Grade Category Counter ---");

/**
 * Counts the number of students in each grade category.
 * @param {Object[]} students - Array of student objects with 'marks'.
 * @returns {Object} - Object with counts for A, B, and C categories.
 */
function countGradeCategories(students) {
    // Explanation: Loop through the students array.
    // Check marks using if-else conditions and increment the respective counters.
    const counts = { A: 0, B: 0, C: 0 };
    
    for (let i = 0; i < students.length; i++) {
        const mark = students[i].marks;
        
        if (mark >= 90) {
            counts.A++;
        } else if (mark >= 75) {
            counts.B++;
        } else {
            counts.C++;
        }
    }
    return counts;
}

const students = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 82 },
    { name: "Charlie", marks: 60 },
    { name: "David", marks: 74 },
    { name: "Eve", marks: 88 },
    { name: "Frank", marks: 91 }
];
console.log("Students:", students);
console.log("Grade Counts:", countGradeCategories(students));
