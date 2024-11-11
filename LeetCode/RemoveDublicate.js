// const RemoveDublicate =(arr)=>{
//     let j=0;
//     for(let i=1 ;i<arr.length ; i++){
//         if(arr[j] !==arr[i]){
//             j++
//             arr[j] = arr[i]
//         }
//     }
//     arr.length = j+1 
//     return  arr
// }

// aceeptable 
// var removeDuplicates = function(nums) {
//     var len = nums.length;
//    var last = NaN;
//    var count = 0;
//    for (var i = 0; i < len; i++) {
//      if (nums[i] !== last) {
//        nums[count] = nums[i];
//        last = nums[i];
//        count++;
//      }
//    }
//    return count;
//  };


var removeDuplicates = function(nums) {
    var len = nums.length;
   var j = 0;
   for (var i = 0; i < len; i++) {
     if (nums[j] !== nums[i]) {
         j++
         nums[j] = nums[i]
     }
   }
   return j+1;
 };


 var removeDuplicatesMost = function(nums) {
    let  len =  nums.length
    let j=0;
    let count=0;
    for(let i=1; i< len ;i++){
         if(nums[j] === nums[i]){
            if(count < 1){
            j++
            nums[j]=nums[i]
            count++
         }
        }else{
            j++ 
            nums[j]=nums[i] 
            count = 0;
         }  
    }
    nums.length = j +1
    return nums;
};
console.log(removeDuplicatesMost([1,1,1,1]))