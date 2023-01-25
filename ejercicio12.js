let nums = [2,3,5,7,9]
let M = 0;
for (let i = 0;i < nums.length;i++ ) {
    if (M < nums [i]){
        M = nums[i];
    }
}
console.log("numero mayor es : " + M)


