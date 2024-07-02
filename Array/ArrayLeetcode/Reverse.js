const Reverse = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = () => {
    rl.question('Enter the size of any array : ', (size) => {
        if (isNaN(size) || size <= 0) {
            console.error('Enter the valid number, which greater then 0');
            main()
            return;
        }

        const elements = [];
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Enter the ' + (index + 1) + ' element : ', (element) => {
                    element = parseInt(element);
                    elements.push(element);
                    ReadArrayElement(index + 1)
                })
            } else {
                console.log("Reversed array are : ", Reverse(elements));
                rl.close()
            }
        }
        ReadArrayElement(0)
    })
}

main()