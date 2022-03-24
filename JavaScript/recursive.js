// Recursive version

const binarySearch = (numArray, target) => {
    let eval = (left, right) => {
        if (left <= right) {
            let middle = Math.floor(left + ((right - left) / 2));
            if (numArray[middle] == target) return middle;
            if (numArray[middle] > target) right = middle - 1;
            if (numArray[middle] < target) left = middle + 1;
            return eval(left, right);
        }
        return -1;
    }
    
    return numArray.length <= 0 ? -1 : eval(0, numArray.length-1);
};
