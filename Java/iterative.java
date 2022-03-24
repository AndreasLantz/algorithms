public class binary{
    
    private static int searchBinary(int[] numArray, int target) {
        int middle, left = 0, right = numArray.length-1;
        while (right >= left) {
            middle = left + ((right - left) / 2);
            if (numArray[middle] == target) return middle;
            if (numArray[middle] > target) right = middle - 1;
            if (numArray[middle] < target) left = middle + 1;
        }
    return -1;
    }

    public static void main(String args[]) {
        int numArray[] = {1,3,4,7,8,12,14,18};
        int target = 8;
        int result = searchBinary(numArray, target);
        
        System.out.println(result == -1 ? -1 : result);
    }
}
