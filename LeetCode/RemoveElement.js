/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.*/
var removeElement = function(nums, val) {
    // not right but for thought 
    // let last = nums.length-1;
    // let k=0;
    // for(let i=0 ; i<last  ; i++){
    //     if(nums[i] === val){
    //         if(nums[last]===val){
    //              nums[i]=nums[last];
    //              k += 2
    //              last -=2
    //         }else{
    //             nums[i]=nums[last]; 
    //             k++
    //             last--
    //         }
             
    //     }
    // }
    // return nums.length -k;

    let j = 0;  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j;
   
};

console.log(removeElement([0,1,2,2,3,2,0,4,2] , 2))