var canJump = function(nums) {
    let n = nums.length-1
let max = 0;
for(let i =0 ; i <= n ; i++){
    if(max < nums[i]){
        max = nums[i]
    }
}  
console.log(max , nums[n])
return max === nums[n ] ? true : false 
};

console.log(canJump([3,2,1,0,4]))