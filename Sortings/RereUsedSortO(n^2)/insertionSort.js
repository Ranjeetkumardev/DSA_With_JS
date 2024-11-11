//  Build up the sort by gradually creating a larger left half which is allways sorted
/*
 -Start picking the second elements in the array 
 -Now compare the second elements with one before it and swap if necessary 
 - continue to the next element and if it in the incorrect order iterate through the sorted portion (i.e left side ) to place the element in the correct place 
 -Repeat untill the array is sorted 
 */

const InsertionSort = (arr)=>{
    if(arr.length <=1) return arr
    for(let i =0 ; i < arr.length ; i++){
       for(let j =i+1 ; j< arr.length ; j++){
          if(arr[j] < arr[i]){
            [arr[j] ,arr[i]] = [arr[i] , arr[j]]
          }
       }
        
    }
    return arr;
} 

console.log(InsertionSort([2,5,8,3 ,-5,8,-11,72,10,4,6,9]))
