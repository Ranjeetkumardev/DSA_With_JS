const LineerSearch = (arr , val) =>{
    for(let i=0;  i<arr.length ; i++){
        if(arr[i]===val) return i
    }
    return -1
}
 

console.log(LineerSearch([ "Ram kripal", "ram","Manish"  , "shyam" , "kishor" ,"shurkshit"] ,"Ram "))

 