// Create an array of fruits and print the first and last item.
Array = ['apple', 'banana', 'cherry'];

console.log(Array[0]);
console.log(Array[Array.length - 1]);

// Add a new fruit to the end and beginning of the array.
Array.push('orange');
Array.unshift('kiwi');

console.log(Array);

// Remove the second item from an array.
Array.splice(1, 1);

console.log(Array);

// Check if a certain fruit exists in an array.
let fruit = 'banana';
let exists = Array.includes(fruit);

console.log(exists);

// Sort an array of numbers in ascending order.
let numbers = [5, 3, 8, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);