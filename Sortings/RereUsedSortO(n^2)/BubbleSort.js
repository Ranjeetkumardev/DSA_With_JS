 /*The built-in sort method accepts an optional comaparator function 
 you can use comparator function to tell js how you want it to sort 
 The comparator looks at pairs of elements (a and b ),determines  their sort order based on the return value 
    if it returns negative number , a should come before b 
    if it returns positive number , a should come after b ,
    if it returns 0 , a and b are same as far as the sort is concerned */

// Bubbe Sort => A sorting algorith where the largest value bubble up to the top

 // Pseudo code  of Bubble sort 
 /* start looping form with a variable called i from the end of the array towards the begging 
    -start inner loop with var j form the begging untill i-1
    - if arr[j] is gratter than arr[j+1] , swap those two value 
    - return the sorted array
  */


    const BubbeSorts =(arr)=>{
     for(let i=arr.length-1 ; i>0 ; i--){
        for(let j =0 ; j < i -1 ; j++){
          if(arr[j] > arr[j +1 ]){
           // swaoing 
           // ES5
            // let temp = arr[j];
            // arr[j] = arr[j+1]
            // arr[j+1] =  temp
            //ES2015
             [arr[j] ,arr[j+1]] = [arr[j+1] , arr[j]]
          }
        }
    }
    return arr
 }


 // if given array is almost sorted then we can stop unneccessry comparision 
 const BubbeSort =(arr)=>{
    for(let i=arr.length-1 ; i>0 ; i--){
        let noSwap = true
       for(let j =0 ; j < i -1 ; j++){
         if(arr[j] > arr[j +1 ]){
            [arr[j] ,arr[j+1]] = [arr[j+1] , arr[j]]
            
            noSwap =false;
         }
       }
       if(noSwap) break
   }
   return arr
}
// console.log(BubbeSorts([8,9,6,7,5,8,32,665,856]))
 console.log(BubbeSorts([7,5,8,32,665,856]))

