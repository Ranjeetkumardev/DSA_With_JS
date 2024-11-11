//  const mergeArray =(nums1,m,nums2,n)=>{
//     let j=m-1 ; let k=n-1;
//     for(let i=nums1.length-1; i> 0 ;i--){
//         if(nums1[j] < nums2[k]){
//             nums1[i]=nums2[k];
//             k--;
//         }else{
//             nums1[i]=nums1[j] ;
//             j--;
//         }

//     } 
//     return nums1;
     
//  }

var mergeArray = function(nums1, m, nums2, n) {
    let i = m + n - 1;  
   let j = m - 1;    
   let k = n - 1;  
   while (j >= 0 && k >= 0) {
       if (nums1[j] > nums2[k]) {
           nums1[i] = nums1[j];
           j--;
       } else {
           nums1[i] = nums2[k];
           k--;
       }
       i--;
   }
     // If any elements remain in nums2, copy them in to nums1
   while (k >= 0) {
       nums1[i] = nums2[k];
       k--;
       i--;
   }
   return nums1;
};

 console.log(mergeArray([0] ,0, [1],1))