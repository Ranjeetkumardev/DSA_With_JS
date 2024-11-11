// Write a Function called maxSubarrauSum which accepta an array of integers and a number called n .The function should calcuate the maximun sum of n consecutive elements in the array
   

//Naive solution
 const maxSubarrauSum =(arr  , num )=>{
    if(num > arr.length) return null;
    let max  = -Infinity
   for(let i=0 ; i<arr.length-num+1 ; i++){
    let temp = 0;
    for(let j=0 ;j<num ;j++){
        temp += arr[i+j];
    }
    if(temp>max){
        max =temp
    }
   }
  return max
 }


 // optimize solutoion
 // window sliding 

 const maxSubarrSum =(arr , num)=>{
    let maxSum =0;
    let tempSum =0;
    if(arr.length <num) return null
    for(let i=0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i=num ; i<arr.length ;i++){
      tempSum = tempSum - arr[i-num] + arr[i]
    }
 }
 
const MaxIndex = (arr , n) =>{
    let max = 0;
    let lastIndex = arr.length- 1;
     //if(arr[i] === 0 && arr[i] !== arr[lastIndex]) return false
    for(let i =0 ; i <  n ; i++){
        if(arr[i]=== arr[lastIndex] ){
            return true
        }
    }
    return false
}

  canJump = function(nums) {
    let furthest = 0; // The furthest index we can reach
    for (let i = 0; i < nums.length; i++) {
        // If we reach an index that is beyond the furthest we can jump to, return false
        if (i > furthest) return false;

        // Update the furthest index we can reach
        furthest = Math.max(furthest, i + nums[i]);

        // If we can reach or exceed the last index, return true
        if (furthest >= nums.length - 1) return true;
    }
    return false; // If we finish the loop and haven't returned true
};

 console.log(AMax([4,8,6,5,3,3,8,9])) 