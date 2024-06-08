public class binary{
    
  private static int searchBinary(int[] numArray, int target, int left, int right) {
    if (right >= left) {
      int middle = left + ((right - left) / 2);
      if (numArray[middle] == target) return middle;
      if (numArray[middle] > target) right = middle - 1;
      if (numArray[middle] < target) left = middle + 1;
      return searchBinary(numArray, target, left, right);
    }
    return -1;
  }

  public static void main(String args[]) {
    int numArray[] = {1,3,4,7,8,12,14,18};
    int target = 8;
    int left = 0;
    int right = numArray.length - 1;
    int result = searchBinary(numArray, target, left, right);

    System.out.println(result == -1 ? -1 : result);
  }
}
