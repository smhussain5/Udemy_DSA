// Binary Search Exercise

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    let middle = Math.floor((low + high) / 2)
    while (val !== arr[middle]) {
        if (val < arr[middle]) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
        middle = Math.floor((low + high) / 2)
    }
    if (val === arr[middle]) {
        return middle;
    } else {
        return -1;
    }
}