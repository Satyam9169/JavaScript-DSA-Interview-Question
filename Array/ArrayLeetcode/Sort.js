const sort_array = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false;
        }
    }
    return true;
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = () => {
    rl.question('Enter the size of an array : ', (size) => {
        size = parseInt(size);
        if (isNaN(size) || size <= 0) {
            console.log('Please enter the valid number');
            main();
            return;
        }
        const elements = [];
        const ReadArrayElement = (index) => {
            if (index < size) {
                rl.question('Please ' + (index + 1) + ' element : ', (element) => {
                    element = parseInt(element);
                    elements.push(element);
                    ReadArrayElement(index + 1)
                })
            } else {
                rl.close();
                console.log(sort_array(elements));
                console.log(elements);
            }
        }
        ReadArrayElement(0)
    })
}

main()