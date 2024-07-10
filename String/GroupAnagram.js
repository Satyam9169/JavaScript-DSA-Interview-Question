let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagram(strs) {
    let hashmap = {};
    for (let word of strs) {
        let count = new Array(256).fill(0);

        for (let char of word) {
            let index = char.charCodeAt(0) - 97;
            count[index]++;
        }

        const key = count.join('#');

        if (hashmap[key]) {
            hashmap[key].push(word)
        }
        else {
            hashmap[key] = [word];
        }
    }
    return Object.values(hashmap);
}

console.log(groupAnagram(strs));