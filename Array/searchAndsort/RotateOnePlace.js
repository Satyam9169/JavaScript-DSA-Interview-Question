const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const Rotate_By_1 = (arr) => {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }

    arr[arr.length - 1] = temp;

    // let result = '';
    for (let i = 0; i < arr.length; i++) {
        // result = arr[i] + ' '
        console.log(arr[i]);
    }
}

const main = () => {
    rl.question('Enter the size of an array : ', (size) => {
        if (isNaN(size) || size <= 0) {
            // size = parseInt(size);
            console.error('Please enter the valid number')
            main();
            return;
        }

        const elements = []
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Enter ' + (index + 1) + ' element : ', (element) => {
                    element = parseInt(element);
                    elements.push(element);
                    ReadArrayElement(index + 1);
                })
            } else {
                rl.close();
                Rotate_By_1(elements)
            }
        }
        ReadArrayElement(0)
    })
}

main();