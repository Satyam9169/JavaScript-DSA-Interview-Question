const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Linear_search = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

const main = () => {
    rl.question('Enter the size of an array : ', (size) => {
        size = parseInt(size);
        if (isNaN(size) || size <= 0) {
            console.error('please enter the valid value, which should greater than 0');
            main();
            return;
        }

        // trying to take a each element
        const elements = [];
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Enter ' + (index + 1) + ' element : ', (element) => {
                    element = parseInt(element);
                    if (!isNaN(element)) {
                        elements.push(element);
                        ReadArrayElement(index + 1);
                    } else {
                        console.error('Invalid input, Please enter a number.');
                        ReadArrayElement(index);
                    }
                })
            } else {
                rl.question('Enter the search number : ', (searchNum) => {
                    searchNum = parseInt(searchNum);
                    if (!isNaN(searchNum)) {
                        const index = Linear_search(elements, searchNum);
                        if (index !== -1) {
                            console.log(`number found at index of : ${index}`);
                        } else {
                            console.log(`number not found index at : ${index}`);
                        }
                    } else {
                        console.log(`Invalid input, Please enter a number `);
                    }
                    rl.close();
                })

            }
        }
        ReadArrayElement(0)
    })
}

main()