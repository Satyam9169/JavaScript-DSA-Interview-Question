function anagram(str1, str2) {
     //This is optimised approach 
     //Complexity Analysis => Time Complexity => O(n) and Space Complexity => O(1)
     if (s.length !== t.length) return false;

     let charCount = {}
     for (let char of s) {
          if (charCount[char]) {
               charCount[char]++;
          } else {
               charCount[char] = 1;
          }
     }

     for (let char of t) {
          if (!charCount[char]) return false;
          charCount[char]--;
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

/*
Dry and run of this code

Initial Setup:
str1 = 'silent'
str2 = 'listen'
map = new Map()
Step-by-Step Execution:
First loop (Building the map):

Iteration 1: num = 's'
's' is not in the map, so add it with a count of 1.
map = {'s' => 1}
Iteration 2: num = 'i'
'i' is not in the map, so add it with a count of 1.
map = {'s' => 1, 'i' => 1}
Iteration 3: num = 'l'
'l' is not in the map, so add it with a count of 1.
map = {'s' => 1, 'i' => 1, 'l' => 1}
Iteration 4: num = 'e'
'e' is not in the map, so add it with a count of 1.
map = {'s' => 1, 'i' => 1, 'l' => 1, 'e' => 1}
Iteration 5: num = 'n'
'n' is not in the map, so add it with a count of 1.
map = {'s' => 1, 'i' => 1, 'l' => 1, 'e' => 1, 'n' => 1}
Iteration 6: num = 't'
't' is not in the map, so add it with a count of 1.
map = {'s' => 1, 'i' => 1, 'l' => 1, 'e' => 1, 'n' => 1, 't' => 1}
Second loop (Validating the second string):

Iteration 1: num = 'l'
'l' is in the map, so set its count to -1.
map = {'s' => 1, 'i' => 1, 'l' => -1, 'e' => 1, 'n' => 1, 't' => 1}
Iteration 2: num = 'i'
'i' is in the map, so set its count to -1.
map = {'s' => 1, 'i' => -1, 'l' => -1, 'e' => 1, 'n' => 1, 't' => 1}
Iteration 3: num = 's'
's' is in the map, so set its count to -1.
map = {'s' => -1, 'i' => -1, 'l' => -1, 'e' => 1, 'n' => 1, 't' => 1}
Iteration 4: num = 't'
't' is in the map, so set its count to -1.
map = {'s' => -1, 'i' => -1, 'l' => -1, 'e' => 1, 'n' => 1, 't' => -1}
Iteration 5: num = 'e'
'e' is in the map, so set its count to -1.
map = {'s' => -1, 'i' => -1, 'l' => -1, 'e' => -1, 'n' => 1, 't' => -1}
Iteration 6: num = 'n'
'n' is in the map, so set its count to -1.
map = {'s' => -1, 'i' => -1, 'l' => -1, 'e' => -1, 'n' => -1, 't' => -1}
Result: Since all characters in str2 were found in str1 and all corresponding counts have been decremented, the function returns true.
*/
