// Radix Sort 
/*
- Radix sort is a sopecial sorting algorithm that works on list of numbers 
- It never makes comparision between elements 
- it exploits the fact that unformation about the size of a number of digits 
- More digits  means a bigger number */

// Radix Sort Helpers 
/* 
- In order to impliment radix sort , it's helper to build a few helper function first 
- getDigit(num , place) -> return the digit in num at the given place value 
- DigitCount(num) ->  return the number of digit in the num 
- MostDigit(nums) -> Given an array of numbers , return the numbers of digits in the largest number in list 
*/

// Helper Funcitons 

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function MostDigit(num) {
    let maxDigit = 0;
    for (let i = 0; i < num.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(num[i]))
    }
    return maxDigit;
}

//  Pseudo Code for Radix Sort 
/* 
- Define a function that accept list of numbers 
- Figure out how many digits the largest number of digits 
- Loop from k=0 up to this largest number of digits 
- For each iteration of the loop :
    - Create buckets for the each digit(0 to 9)
    - place each number in the corresponding bucket based on its k^th digit

- Replace our existing array with values in our buckets , start with 0 and going up to 9
- return list at the end 
    */

// Now impliment Radix sort 
function radixSort(nums) {
    let maxDigitCount = MostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // you make an array and push in it or easy way is:
        let digitBuckets = Array.from({ length: 10 }, () => []) // [ [],[],..] length is size of array and each one is an empty array 
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat({ ...digitBuckets })
    }
    return nums
}

function radixSort(nums) {
    let maxDigitCount = MostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // you make an empty array and push in it or easy way is:
        // Create buckets for each digit (0 to 9)
        let digitBuckets = Array.from({ length: 10 }, () => []) // [ [],[],..] length is size of array and each one is an empty array  
        // Place each number in the corresponding bucket based on the k-th digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        // Flatten the buckets back into nums
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([44, 8, 10, 41, 45]))

