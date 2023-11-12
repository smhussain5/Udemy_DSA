// Multiple Pointers - countUniqueValues

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    let uniqueCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let pointerLeft = i;
        let pointerRight = i + 1;
        if (arr[pointerLeft] !== arr[pointerRight]) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}