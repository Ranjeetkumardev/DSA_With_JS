 // Merging two sorted array in a sorted order 
 const MergeArray =(arr1 , arr2) =>{
     let result = []
     let i=0; 
     let j=0;
     while(i < arr1.length && j < arr2.length){
         if(arr1[i] <= arr2[j]){
            result.push(arr1[i])
            i++
         }else{
            result.push(arr2[j])
             j++
         }
     }
     while(i< arr1.length){
        result.push(arr1[i])
        i++
     }
     while(j< arr2.length){
        result.push(arr2[j])
        j++
     }
     return result
 }

 //console.log(sortArray([8,10,16,20,45,50] ,[41,48,54,75,80]))
 
// Pseudocode for MergeSort 
/*
-Break up the array into half untill  you have arrays that are empty or have only one element
- Once you have smaller sorted arrays , merge those arrays with other sorted array untill you are back at the full length of the array 
-Once the array has been merged back together , return the merged (and sorted ) array
*/

const MergeSort =(arr) =>{
  if(arr.length <=1) return arr
  let mid = Math.floor((arr.length)/2);
  let left = MergeSort(arr.slice(0 , mid));
  let right = MergeSort(arr.slice(mid));
   return MergeArray(left ,right)

}

console.log(MergeSort([8, 10, 48, 50, 54, 75,80,16, 20, 41,45]))

