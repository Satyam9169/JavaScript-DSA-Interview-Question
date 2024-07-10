let s = "babad"

function LongestPalindromicSubstring(s) {
    if (s.length === 0) return '';

    let start = 0, end = 0;
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            left = left - 1;
            right = right + 1;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);
        let len = Math.max(odd, even);
        if (len > end - start) {
            start = i - Math.floor((len) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}

console.log(LongestPalindromicSubstring(s));