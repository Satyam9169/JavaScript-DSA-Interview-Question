const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let left = [],
    right = [],
    pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const leftArray = quickSort(left);
  const rightArray = quickSort(right);

  return [...leftArray, pivot, ...rightArray];
};

// Example usage
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
