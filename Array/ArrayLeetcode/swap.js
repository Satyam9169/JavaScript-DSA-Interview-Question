// write the logic of swap the array of two function

const swap = (input) => {
    for (let i = 0; i < input.length; i += 2) {
        let temp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = temp;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = () => {
    rl.question('Enter the size of an array : ', (size) => {
        // here we are trying to check it should not less than 0 and not a string
        // size = parseInt(size);
        if (isNaN(size) || size < 0) {
            console.error('Please enter valid number, which should greater than 0')
            main();
            return;
        }

        //let's create an enpty array
        const elements = [];
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Enter ' + (index + 1) + ' : ', (element) => {
                    element = parseInt(element);
                    if (!isNaN(element)) {
                        elements.push(element);
                        ReadArrayElement(index + 1);
                    } else {
                        console.error('Invalid input. Please enter a number.');
                        readArrayElement(index);
                    }
                })
            } else {
                rl.close();
                swap(elements);
                console.log('Swapped array are : ', elements);
            }
        }
        ReadArrayElement(0)
    })
}

main()