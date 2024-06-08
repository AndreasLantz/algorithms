// Iterative version that uses calculations in ternary operator expressions. Probably not as readable as separate if statements, but very compact.

const binarySearch = (numArray, target) => {
    let middle, left = 0, right = numArray.length - 1;
    while (right >= left) {
        middle = Math.floor(left + ((right - left) / 2));
        if (numArray[middle] === target) return middle;
        (numArray[middle] > target) ? right = middle - 1 : left = middle + 1;   
    }
    return -1;
};
