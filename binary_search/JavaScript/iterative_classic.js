// A slightly older style just for fun.

const binarySearch = (numArray, target) => {
    
    let middle
    let left = 0
    let right = numArray.length-1;
    
    while (right >= left) {
        
        middle = Math.floor(left + ((right - left) / 2));
        
        if (numArray[middle] == target) {
            return middle;
        } else if (numArray[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        
    }
    return -1;
};
