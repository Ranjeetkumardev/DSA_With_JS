var majorityElement = function(nums) {
    let count = Math.floor(nums.length / 2);
     let freq ={}
     for(let i of nums){
       freq[i] = (freq[i]||0)+1
     }
     console.log("majority:" , freq)
     for(let key in freq){
        if(freq[key] > count){
            return key;
        }
     }
     return null
    };


    console.log(majorityElement([3,2,3]))