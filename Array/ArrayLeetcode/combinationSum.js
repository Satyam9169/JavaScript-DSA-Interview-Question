function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remain, combination, start) {
        if (remain === 0) {                               // Base case
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const current = candidates[i];

            if (current > remain) {                      // Small calculation
                continue;
            }

            combination.push(current);
            backtrack(remain - current, combination, i);  // Recursive call
            combination.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
}

// Example usage:
const candidates1 = [2, 3, 6, 7];
const target1 = 7;
console.log(combinationSum(candidates1, target1)); // Output: [[2, 2, 3], [7]]

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(combinationSum(candidates2, target2)); // [[2,2,2,2],[2,3,3],[3,5]]

const candidate3 = [2];
const target3 = 1;
console.log(combinationSum(candidate3, target3)); // []