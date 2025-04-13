
// Reverse an array without using .reverse().
 let numbers = [1, 2, 3, 4, 5];

 let reversed = [];
 for (let i = numbers.length - 1; i >= 0; i--) {
   reversed.push(numbers[i]);
}
console.log(reversed);

// Find the maximum and minimum values in an array of numbers.
let numbers2 = [5, 3, 8, 1, 2];

let max = Math.max(...numbers2);
let min = Math.min(...numbers2);

console.log('Max:', max);
console.log('Min:', min);

// Use .map() to square all numbers in an array.
let numbers3 = [1, 2, 3, 4, 5];

let squared = numbers3.map(num => num * num);
console.log(squared);

// Use .filter() to keep only even numbers in an array.
let numbers4 = [1, 2, 3, 4, 5];

let evenNumbers = numbers4.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Flatten a nested array (e.g., [1, [2, 3], [4, 5]] ➝ [1, 2, 3, 4, 5])
let nestedArray = [1, [2, 3], [4, 5]];

let flattened = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flattened);
