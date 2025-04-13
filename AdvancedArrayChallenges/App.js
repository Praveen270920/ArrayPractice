// Chunk an array into smaller arrays of a specific size. Example: chunkArray([1,2,3,4,5,6,7], 3) ➝ [[1,2,3],[4,5,6],[7]]
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Find the intersection of two arrays. Example: intersection([1,2,3,4], [3,4,5,6]) ➝ [3, 4]

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// Find all unique values from two arrays combined. Example: uniqueUnion([1,2,3], [3,4,5]) ➝ [1,2,3,4,5]

function uniqueUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(uniqueUnion([1, 2, 3], [3, 4, 5]));

// Move all zeroes to the end of an array while keeping the order of the rest. Example: [0, 1, 0, 3, 12] ➝ [1, 3, 12, 0, 0]

function moveZeroes(arr) {
    let zeroCount = 0;
    const result = arr.filter(num => {
        if (num === 0) {
            zeroCount++;
            return false;
        }
        return true;
    });
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    return result;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

// Write a function that returns the most frequent element in an array. Example: [1,3,1,3,2,1] ➝ 1

function mostFrequent(arr) {
    const frequency = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}
console.log(mostFrequent([1, 3, 1, 3, 2, 1]));
