// Iterative version that uses calculations in ternary operator expressions. Probably not as readable as separate if statements, but very compact.

const binarySearch = (numArray, target) => {
    let pivot, left = 0, right = numArray.length-1;
    while (right >= left) {
        pivot = Math.floor(left + ((right - left) / 2));
        if (numArray[pivot] === target) return pivot;
        (numArray[pivot] > target) ? right = pivot - 1 : left = pivot + 1;   
    }
    return -1;
};
