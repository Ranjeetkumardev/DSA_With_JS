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
 


/*You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
*/

const BinarySearchTree =(arr , val)=>{
   let start =0 ;
   let end = arr.length -1
   while(start <= end ){
    let middle = Math.floor((start + end)/2)
    if(arr[middle] < val) start = middle + 1;
   else if(arr[middle] > val ) end= middle - 1;
    else return middle
   }
}
console.log(BinarySearch([8 ,55,85] ,85))