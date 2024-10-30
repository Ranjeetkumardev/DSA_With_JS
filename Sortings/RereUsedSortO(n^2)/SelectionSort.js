// Simillar to bubble sort , but instead of first placing large value into sorted positon , it places small value into sorted position

/* Pseudocode for Seleciton sort 
  -store the first elements as the smallest value you seen so far ,
  -Compare this item to the next item in the array untill you find a smaller number 
  -if a smaller number is found designate that smaller number to be the new ,"minimum" is not the value (index)  you initialy began with swap the two values.
  -Repeat this with next value untill the array is sorted 
  */ 

const SelectinSort =(arr) =>{
   for(let i= 0 ;  i <arr.length ; i++){
    let min =  i
    for(let j=i+1 ; j< arr.length ; j++){
      if(arr[j] < arr[min]) {
        min = j ;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min]
    arr[min] =  temp
   }
   return arr
}

console.log(SelectinSort([8,36,9,5,6,8,45]))