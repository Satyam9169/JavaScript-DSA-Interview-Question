const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printArray(arr) {
  console.log("Array elements:");
  console.log(arr.join(' '));
  rl.close();
}

function getArrayInput() {
  rl.question('Enter the number of elements: ', (numInput) => {
    const num = parseInt(numInput);
    if (isNaN(num) || num <= 0) {
      console.log("Please enter a valid number greater than 0.");
      rl.close();
      return;
    }

    const arr = [];
    let count = 0;

    const readElements = () => {
      rl.question(`Enter element ${count + 1}: `, (elementInput) => {
        arr.push(elementInput);
        count++;

        if (count < num) {
          readElements();
        } else {
          printArray(arr);
        }
      });
    };

    readElements();
  });
}

getArrayInput();
