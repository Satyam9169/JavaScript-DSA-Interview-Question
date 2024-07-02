const countFrequency = (str) => {
    let frequency = {};
    const len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str[i];
        if (char >= 'a' && char <= 'z') {
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
        }
    }
    return frequency;
}

const result = countFrequency('satyamagrahari');
console.log(result);