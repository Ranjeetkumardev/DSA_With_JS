// Quick Sort 
/*
- Like Merge sort , exploits the fact that arrays of 0 or 1 element are always sort 
-Works by selecting one element (called the Pivot) and finding the index where the pivot should end up in the sorted array
-Once the pivot is positoned appropriately , quick sort can be applied on the either side of the pivot
*/


// Pivate Helper 
/*  In order to impliment merge sort it's usefull to first impliment a function responsible arranging element  in an array on either side of pivote
- Given an array this helper function should desiginate an elements in  the array so that all values less than the pivote are moved to the left of the pivote , and all values gratter than the pivote are moved on on the rihgt side of pivote 
-The order of element on either side of the pivote does'nt matter 
-The helper should do this in-place ,that is it should not create a new array 
-When compelete ,the helper should return the index of the pivote 
*/


// Picking the Pivote 

/* 
-The runtime of quick sort depends in part on how one select the pivote 
 - Idealy the pivote should be choosen so that it's roughly the median value in the data set you're sorting 
 - For simplicity ,we i'll always choose the pivote to be the first element (we'll about conquences of this later)*/

// Example 
/*
let arr = [2,5,3,5,6]
 pivot(arr)
 arr: 
  [2,1,4,3,5,8,6,7] // order does'nt matter 
  */


// Pivot Pseudo code 
/* 
- it will help to accept three elements an array ,a start index and last index (these can default to 0 and the arr length-1 respectevely)
- Grave the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up )
- Loop though the array from the start untill end 
     - if the pivot is grater than the current elelment , increase the pivot index variable and then swap the current element with the element at the pivot index 
- Swap the starting element (i.e the pivot ) with pivot index    
- Return the pivot index      
*/

// Pivot helper implimentation 



const PivotHelper = (arr, start = 0, end = arr.length - 1) => {
    function Swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            Swap(arr, i, swapIndex);
        }
    }

    Swap(arr, start, swapIndex);
    return swapIndex;
};

// Now the QuickSort Pseudocode 
/*
- Call the pivot helper on the array
-When  the helper return to you the updated pivot index recursively call the pivot helper on the subarray to the right of that index 
- Your base case occurs when you concider a subarray with less than 2 elements
*/
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = PivotHelper(arr, left, right)
        //left Side 
        quickSort(arr, left, pivotIndex - 1);
        //Right side 
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}
console.log(quickSort([44, 8, 10, 41, 45]))




