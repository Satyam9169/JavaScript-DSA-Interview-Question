const second_largest = (arr) => {
    if(arr.length < 2){
        return -1;
    }

    let large = -Infinity;
    let second_large = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > large){
            second_large = large;
            large = arr[i];
        }else if(arr[i] > second_large && arr[i] !== large){
            second_large = arr[i];
        }
    }
    return second_large;
}

const second_smallest = (arr) => {
    if(arr.length < 2){ return -1;}

    let small = Infinity;
    let second_small = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < small){
            second_small = small;
            small = arr[i];
        }
        else if(arr[i] < second_small && arr[i] !== small){
            second_small = arr[i];
        }
    }
    return second_small;
}

const readline = require('readline');
 
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


const main = () => {
    rl.question('Enter the size of an array : ', (size)=> {
        size = parseInt(size);
        if(isNaN(size) || size <= 0){
            console.error('please enter the valid value, which should greater than 0');
            main();
            return;
        }

        // trying to take a each element
        const elements = [];
        const ReadArrayElement = (index) =>{
            if (index < size) {
                rl.question('Enter ' + (index + 1) + 'element : ', (element)=> {
                    element = parseInt(element);
                    if(!isNaN(element)){
                    elements.push(element);
                    ReadArrayElement(index + 1);
                }else{
                    console.error('Invalid input, Please enter a number.');
                    ReadArrayElement(index);
                }
                })
            }else{
                rl.close();
                console.log('Array Elements:', elements);
                console.log('Second smallest:', second_smallest(elements));
                console.log('Second largest:', second_largest(elements));
            }
        }
        ReadArrayElement(0)
    })
}

main()