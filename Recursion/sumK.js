const printK = (arr, current = [], index = 0, s = 0, Sum) => {
  if (index === arr.length) {
    if (s === Sum) {
      console.log(current);
    }
    return; // exit the function
  }
  // Include the current element in the subset
  current.push(arr[index]);
  s += arr[index];
  printK(arr, current, index + 1, s, Sum); // Move to the next element

  // Backtrack: exclude the current element from the subset
  s -= arr[index];
  current.pop(); // Remove the last element
  printK(arr, current, index + 1, s, Sum); // Move to the next element without including the current one
};
let arr = [1, 2, 1];
let targetSum = 2;
printK(arr, [], 0, 0, 2);
