
//we want to check if the element of the array can summed up to 14
const target = 14;

function subarraySum(arr, target) {
    // loop through array
    for (let i = 0; i < arr.length; i++) {
      let currentSum = 0;
  
      // Loop through the rest of the array starting from the current index
      for (let j = i; j < arr.length; j++) {
        // Add the current element to the current sum
        currentSum += arr[j];
  
        //return true,If the current sum is equal to the target 
        if (currentSum === target) {
          return true;
        }
  
        // If the current sum is greater than the target, break from the inner loop
        if (currentSum > target) {
          break;
        }
      }
    }
  
    // If no subarray is found that sums up to the target, return false
    return false;
  }
  
  // Example usage
  const arr = [4, 2, 7];

  console.log(subarraySum(arr, target)); // Output: true