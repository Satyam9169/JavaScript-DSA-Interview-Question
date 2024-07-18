const convert = (char) => {
    if(char >= 'a' && char <= 'z'){
        let lowercaseChar = char.charCodeAt(0) - 32;

        // from ASCII back to string
        let lowercase = String.fromCharCode(lowercaseChar)
        return lowercase;
    }
    return char
} 

let char = 'b';
console.log(convert(char));