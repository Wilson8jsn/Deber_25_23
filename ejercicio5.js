let nums = [0,2,9,2,6,12,5,7];
let count = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        count++;
    }
}
console.log(count);