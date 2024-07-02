const arr = [1,2,3,4,5,6,7,8]

const BinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1, mid;
    while(start <= end){
        mid = Math.floor(end + (start - end) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

const result = BinarySearch(arr, 5);
console.log(result)