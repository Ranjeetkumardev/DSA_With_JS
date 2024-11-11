/* The `rotate` function takes an array `nums` and an integer `k` as input parameters. It creates a new
array `rotated` by spreading the elements of the input array `nums`. Then, it iterates over the
elements of the input array `nums` and calculates the new position for each element after rotating
by `k` positions. It updates the elements in the original `nums` array with the corresponding
elements from the `rotated` array based on the new positions. Finally, it returns the `rotated`
array which represents the original array after rotating by `k` positions. */

var rotate = function(nums, k) {
    let rotated=[...nums]
    for(let i=0; i<nums.length;i++){
        let position=(i+k)%(nums.length)
        nums[position]=rotated[i]
    }
     return rotated
 };
console.log(rotate([1,2,3,4,5,6,7,8 ,9] , 3))