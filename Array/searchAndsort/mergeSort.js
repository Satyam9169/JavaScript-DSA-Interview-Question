const merge = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);

  let left = [];
  let right = [];

  for (let i = 0; i < middle; i++) {
    left.push(arr[i]);
  }

  for (let i = middle; i < arr.length; i++) {
    right.push(arr[i]);
  }

  return mergeSort(merge(left), merge(right));
};

const mergeSort = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex = leftIndex + 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex = rightIndex + 1;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex = leftIndex + 1;
  }

  if (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex = rightIndex + 1;
  }

  return result;
};

const unsortedArray = [34, 7, 23, 32, 5, 62];
console.log(merge(unsortedArray));
