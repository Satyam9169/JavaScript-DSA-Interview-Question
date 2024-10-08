const findsubsequences = (arr, CurrentSubsequence = [], index = 0) => {
  if (index === arr.length) {
    console.log(CurrentSubsequence);
    return;
  }

  // Recursive case 1: Exclude the current element
  findsubsequences(arr, CurrentSubsequence, index + 1);

  // Recursive case 2: Include the current element (use push/pop)
  CurrentSubsequence.push(arr[index]); // Push the current element
  findsubsequences(arr, CurrentSubsequence, index + 1);
  CurrentSubsequence.pop(); // Pop the current element to backtrack
};

let arr = [3, 1, 2];
console.log(findsubsequences(arr));
