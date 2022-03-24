const binarySearch = (numArray, target) => {
    let pivot, left = 0, right = nums.length-1;
    while (right >= left) {
        pivot = Math.floor(left + ((right - left) / 2));
        if (nums[pivot] == target) return pivot;
        if (nums[pivot] > target) right = pivot - 1
        if (nums[pivot] < target) left = pivot + 1;
    }
    return -1;
};
