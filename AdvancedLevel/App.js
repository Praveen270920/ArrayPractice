// Remove duplicates from an array.
let numbers5 = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [...new Set(numbers5)];

console.log(uniqueNumbers);

// Group words in an array by their first letter (e.g., ["apple", "banana", "avocado"] ➝ { a: ["apple", "avocado"], b: ["banana"] })
let words = ["apple", "banana", "avocado"];

let grouped = words.reduce((acc, word) => {
  let firstLetter = word[0];
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(word);
  return acc;
}, {});

console.log(grouped);

// Write a function to rotate an array by k steps (e.g., [1,2,3,4,5] rotated by 2 ➝ [4,5,1,2,3])
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
let rotated = rotateArray([1, 2, 3, 4, 5], 2);

console.log(rotated);

// Count the frequency of elements in an array.
let numbers6 = [1, 2, 2, 3, 4, 4, 5];

let frequency = numbers6.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// Use .reduce() to calculate the total sum of a number array.
let numbers7 = [1, 2, 3, 4, 5];

let totalSum = numbers7.reduce((acc, num) => acc + num, 0);

console.log('Total Sum:', totalSum);
