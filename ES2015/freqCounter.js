// freequency Counter 
//  

//madbrains 
//write a function same that check if square of all elements in arr1 is pressent in arr2 
const Same = (arr1 , arr2)=>{
   if(arr1.length !== arr2.length) return false;
   let freqCounter1 ={};
   let freqCounter2 ={};
   for(let val of arr1){
     freqCounter1[val]= (freqCounter1[val] || 0) +1;
   }
   for(let val of arr2){
    freqCounter2[val] = (freqCounter2[val] || 0) +1;
   }
  for(let key in freqCounter1){
    if(!(key**2 in freqCounter2)){
        return false;
    }
    // if(freqCounter1[key**2] !== freqCounter2[key]){
    //     return false;
    // }
  }
  return true
}

//console.log(Same([2,8,4,3,2,3],[4,64,9,16,4,9]))


// write a function that check if two string is anagram of not 

const Anagram =(str1 , str2)=>{
    if(str1.length !== str2.length) return "No it's not an Anagram";
    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let st of str1 ){
       freqCounter1[st] = (freqCounter1[st] || 0) +1
    }
    for(let st of str2 ){
       freqCounter2[st] = (freqCounter2[st] || 0) +1
    }
    for(let s in freqCounter1){
        if(!(s in freqCounter2)) return "No it's not an Anagram";
    }
   return "Yes it's an Anagram";
}

console.log(Anagram("Anagram" , "nagaram"))


