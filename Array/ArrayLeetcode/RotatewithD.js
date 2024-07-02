const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Rotate_Array = (arr, rotate) => {
    let n = arr.length;
    rotate = rotate % n;
    const newArray = [];

    for (let i = n - rotate; i < n; i++) {
        newArray.push(arr[i]);
    }

    for (let i = 0; i < n - rotate; i++) {
        newArray.push(arr[i]);
    }

    console.log(newArray);
}

// const Rotate_Array = (arr, rotate) => {
//     let len = arr.length;
//     rotate = rotate % len;

//     if(rotate < 0){
//         rotate = len + rotate;
//     }
// let newArray = new Array()
// rotate = rotate % len;
// let j = 0;
// for(let i = rotate; i < len; i++){
//     newArray[j] = arr[i];
//     j++;
// }
// for(let i = 0; i < rotate; i++){
//     newArray[j] = arr[i];
//     j++;
// }
// for(let i = 0; i < len; i++){
//     arr[i] = newArray[i];
// }

// console.log(arr);

//     Reverse_array(arr, 0, rotate - 1);
//     Reverse_array(arr, rotate, arr.length - 1);
//     Reverse_array(arr, 0, arr.length - 1);

//     console.log('Rotated Array : ', arr);
// }


// const Rotate_Array = (arr, rotate) => {

//     let newArray = [];
//     rotate = rotate % arr.length;
//     for (let i = rotate; i < arr.length; i++) {
//         newArray.push(arr[i]);
//     }
//     for (let i = 0; i < rotate; i++) {
//         newArray.push(arr[i]);
//     }
//     console.log('Rotated Array : ', newArray);
// }






const main = () => {
    rl.question('Enter the size of an element: ', (size) => {
        if (isNaN(size) || size <= 0) {
            console.error('Please enter the valid number !!!');
            main()
            return;
        }

        const elements = [];
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Enter the ' + (index + 1) + ' element : ', (element) => {
                    element = parseInt(element);
                    elements.push(element);
                    ReadArrayElement(index + 1);
                })
            } else {
                rl.question('Enter the dTimes rotate : ', (rotate) => {
                    rotate = parseInt(rotate)
                    if (!isNaN(rotate))
                        Rotate_Array(elements, rotate)
                    rl.close();
                })
            }
        }
        ReadArrayElement(0);
    })
}

main()