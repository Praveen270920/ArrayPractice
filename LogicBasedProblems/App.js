// Group numbers in an array by whether they are odd or even. Example: [1, 2, 3, 4, 5] ➝ { odd: [1, 3, 5], even: [2, 4] }
let numbers = [1, 2, 3, 4, 5];

let groupedNumbers = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even.push(num);
  } else {
    acc.odd.push(num);
  }
  return acc;
}, { odd: [], even: [] });

console.log(groupedNumbers);

// Find the longest sequence of consecutive numbers in an array. Example: [100, 4, 200, 1, 3, 2] ➝ Sequence is [1,2,3,4], length is 4
let arr = [100, 4, 200, 1, 3, 2];

let longestConsecutive = (arr) => {
  let numSet = new Set(arr);
  let maxLength = 0;

  for (let num of arr) {
    if (!numSet.has(num)) continue;

    let currentNum = num;
    let currentStreak = 1;

    while (numSet.has(currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }

    maxLength = Math.max(maxLength, currentStreak);
  }

  return maxLength;
};

console.log(longestConsecutive(arr));

// Find the first non-repeating element in an array. Example: [9, 4, 9, 6, 7, 4] ➝ 6

let arr2 = [9, 4, 9, 6, 7, 4];

let firstNonRepeating = (arr) => {
  let frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  for (let num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  return null; // If no non-repeating element is found
};

console.log(firstNonRepeating(arr2));

// Group anagrams from an array of words.
// Example: ["eat", "tea", "tan", "ate", "nat", "bat"] ➝ [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

let words = ["eat", "tea", "tan", "ate", "nat", "bat"];

let groupAnagrams = (words) => {
  let anagrams = {};
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (!anagrams[sorted]) {
        anagrams[sorted] = [];
        }
        anagrams[sorted].push(word);
    }
    return Object.values(anagrams);
}

console.log(groupAnagrams(words));

// Implement a deep flatten function. Input: [1, [2, [3, [4]], 5]] ➝ Output: [1, 2, 3, 4, 5]

let deepFlatten = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(deepFlatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}

console.log(deepFlatten([1, [2, [3, [4]], 5]]));
