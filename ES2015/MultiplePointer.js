//write a funtion called sumZero which accept an sorted array of intrger .The funciton should the first pair where the sum is 0 .Return an array that include both value that sum is zeor or undefined if a pair does'nt exist 
const SumZero = (arr)=>{
    let p=0 ;
    let q=arr.length-1;
    let newArr =[];
    while(p<=q){
        if(arr[p] + arr[q]===0){
            newArr.push(arr[p])
            newArr.push(arr[q])
            // use break if you want first pair 
            //break
        }
        q--
        p++
    }
    return newArr;
}


// impliment a fuction called countuniUqueValues, which accept a sorted array .There can be negative numbers in the array but it will be sorted 
// This Method only work if array is sorted 
const CountUniUqueValues =(arr)=>{
    let UniqueCount =0;
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i] !== arr[i+1]){
        UniqueCount++
        }
    }
  return UniqueCount;
}
 
console.log(CountUniUqueValues([-5,-3,3,3,3,5,5,6,9,9]))