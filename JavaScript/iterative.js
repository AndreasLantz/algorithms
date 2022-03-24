const binarySearch = (numArray, target) => {
    let middle, left = 0, right = numArray.length-1;
    while (right >= left) {
        middle = Math.floor(left + ((right - left) / 2));
        if (numArray[middle] == target) return middle;
        if (numArray[middle] > target) right = middle - 1
        if (numArray[middle] < target) left = middle + 1;
    }
    return -1;
};
