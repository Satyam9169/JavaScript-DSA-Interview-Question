function anagram(str1, str2) {
     //This is optimised approach 
     //Complexity Analysis => Time Complexity => O(n) and Space Complexity => O(1)
     let map = new Map()
     for (let num of str1) {
          if (map.has(num)) {
               map.set(num, map.get(num) + 1);
          } else {
               map.set(num, 1);
          }
     }

     for (let num of str2) {
          if (!map.has(num))
               return false;
          map.set(num, -1);
     }
     return true;
     // This is first method of this string
     // str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
     // str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

     // if(str1.length !== str2.length) return false;

     // str1 = str1.split('').sort().join('');
     // str2 = str2.split('').sort().join('');

     // return str1 === str2;
}

console.log(anagram('silent', 'listen'))
console.log(anagram("triangle", "integral"))
console.log(anagram("apple", "pale"))
console.log(anagram("Dormitory", "dirty room"))
