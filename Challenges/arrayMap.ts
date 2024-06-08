/* eslint-disable no-unused-vars */
const hasTargetSum= (arr, target) => {
    // Initialize the current_sum and pointers
    let currentSum = 0;
    let left = 0;
  
    // Loop through the array
    for (let right = 0; right < arr.length; right++) {
      // Add the current element to the current_sum
      currentSum += arr[right];
  
      // If the current_sum exceeds the target, subtract elements from the left
      while (currentSum > target) {
        currentSum -= arr[left];
        left += 1;
      }
  
      // If the current_sum equals the target, return true
      if (currentSum === target) {
        return true;
      }
    }
  
    // If no subarray is found, return false
    return false;
  }
  