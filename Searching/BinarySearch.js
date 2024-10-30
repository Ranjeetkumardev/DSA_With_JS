//Binary Search => Binary Search allways take sorted arry, divide and conqure rule => divede large datasets into small-2 dataset ( basicaly into two parts and then perform the operation)

const BinarySearch =(arr , val) =>{
   let start =0 ;
   let end = arr.length -1
   while(start <= end ){
    let middle = Math.floor((start + end)/2)
    if(arr[middle] < val) start = middle + 1;
   else if(arr[middle] > val ) end= middle - 1;
    else return middle
   }
return - 1
}
 

console.log(BinarySearch([8 ,55,85] ,85))