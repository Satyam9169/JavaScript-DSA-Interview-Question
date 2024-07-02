// Task a input from user and print it
 
const swap = (input) => {
    for(let i = 0; i < input.length - 1; i += 2){
        let temp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = temp;
    }
}

const maxElement = (input) => {
    let maximum = input[0];
    for(let i = 1; i < input.length; i++){
        if(input[i] > maximum){
            maximum = input[i];
        }
    }
    return maximum;
}



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const main = () => {
    rl.question('Enter the size of an array : ', (size)=> {
        if(isNaN(size) || size <= 0){
            console.error('Please enter a valid number, should greater than 0');
            main()
            return;
        }
        const elements = [];
        const ReadArray = (index) => {
            if(index < size){
                rl.question('Enter ' + (index + 1) + ' element ', (element)=> {
                        element = parseInt(element);
                        elements.push(element);
                        ReadArray(index + 1);
                })
            }else{
                swap(elements);
                console.log('Element of an array : ', elements);
                const large =  maxElement(elements);
                console.log('maximum array of the array : ', large);
                rl.close();
            }
        };
        ReadArray(0);
    })
}

main();















































// // const readline = require('readline');

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // })

// // const ReadArraySize = () => {
// //     rl.question('Please enter the size of an array : ', (size)=> {
// //         if(isNaN(size) || size < 1){
// //             console.error('please enter valid number, greater then 1');
// //             ReadArraySize();
// //             return;
// //         }
        
// //         ReadArrayElement(parseInt(size), [], 0)
// //     })
// // }

// // const ReadArrayElement = (size, elements, index) => {
// //     if(index < size){
// //         rl.question('Enter element ' + (index + 1) + ' : ', (element) => {
// //             elements.push(element)
// //             ReadArrayElement(size, elements, index + 1)
// //         });
// //     }else{
// //         rl.close();
// //         PrintArray(elements);
// //     }
// // }

// // const PrintArray = (array) => {
// //     console.log('Entered Array : ', array);
// // }

// // ReadArraySize()
