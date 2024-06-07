function subarraySum(arr, target) {
    // Initialize the current sum to 0 and the left pointer to 0
    let currentSum = 0;
    let left = 0;
  
    // Iterate through the array using the right pointer
    for (let right = 0; right < arr.length; right++) {
      // Add the current element to the current sum
      currentSum += arr[right];
  
      // While the current sum is greater than the target,
      // remove elements from the left side of the subarray
      while (currentSum > target) {
        currentSum -= arr[left];
        left++;
      }
  
      // If the current sum from subarray is equal to the target then return true
      if (currentSum === target) {
        return true;
      }
    }
  
    // If no subarray is found that sums up to the target,
    // return false
    return false;
  }
  
  // Example usage
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 14;
  console.log(subarraySum(arr, target)); // Output: true