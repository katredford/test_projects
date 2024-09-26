//? kadanes algorithm


function maxSubArray(nums){
   
  let currentMax = nums[0];  
  let globalMax = nums[0];   

 
  for (let i = 1; i < nums.length; i++) {
   
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    

    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;  
}

slums = [2,-3,4,-2,2,1,-1,4]

console.log(maxSubArray(slums))
//!function twoSum(nums, target) {
//   const adder = {}; 

//   for (let i = 0; i < nums.length; i++) {
//     const difference = target - nums[i];

//     // Check if the difference exists in the hashmap using hasOwnProperty
//     if (adder.hasOwnProperty(difference)) {
//       // If it exists, return the indices of the two numbers
//       return [adder[difference], i];
//     }

//     // Add the current number and its index to the hashmap
//     adder[nums[i]] = i; 
//   }

//   // Return an empty array if no solution is found
//   return [];
// }
// function twosSum(nums, target) {
//     const adder = {}; 
//         for(let i = 0; i < nums.length; i++) {
//           const difference = target - nums[i];
  
//         //   console.log("adderdifference", adder[difference])
//           // // Check if the difference exists in the hashmap
//           if (adder[difference] !== undefined) {
//               // If it exists, return the indices of the two numbers
//               return [adder[difference], i];
//           }
  
//           if( adder.hasOwnProperty(difference)){
//               return [adder[difference], i]
//           }
//           adder[nums[i]] = i; 
          
//       }
  
//       // console.log("adder",adder);
//       return [];
//       }

//       const a =[3,4,5,6]
//       const b = 7;


// function isAnAnagram(s, t) {
//     // If strings have different lengths, they can't be anagrams
//     if (s.length !== t.length) {
//       return false;
//     }
  
//     // Create a hashmap to count characters
//     const charCount = {};
  
//     // Count each character in the first string
//     for (let char of s) {
//       charCount[char] = (charCount[char] || 0) + 1; // Increment count
//     }
  
//     // Reduce the count for each character in the second string
//     for (let char of t) {
//       if (!charCount[char]) {
//         return false; // If character is not found or count is zero, not an anagram
//       }
//       charCount[char]--; // Decrement count
//     }
  
//     // At this point, all character counts should be 0
//     for (let key in charCount) {
//       if (charCount[key] !== 0) {
//         return false;
//       }
//     }
  
//     return true; // Strings are anagrams
//   }
  
//   // Test the function with the provided example
//   const sta = "racecar";
//   const ta = "carrace";
  
//   console.log(isAnAnagram(sta, ta));

// function sortString(str) {
//     let arr = str.split('');
//     let n = arr.length;
//     let swapped;

//     do {
//         swapped = false;
//         for (let i =0; i < n-1; i++){
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 swapped = true;

//             }
//         }
//         n--;
//     }while(swapped);
//     console.log("hello")
//     return arr.join('');
// }

// const beep = "racecar"
// const boop = "carrace"
// console.log(sortString(beep));


// function bubbleSortString(str) {
//     // Convert string to an array of characters
//     let arr = str.split('');
  
//     // Bubble sort algorithm
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap characters if they are in the wrong order
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
  
//     // Convert the sorted array back to a string
//     return arr.join('');
//   }
  
//   const bess = "racecar";
//   console.log(bubbleSortString(bess));

function bubbleSortString(str) {

    let arr = str.split('');

    let n = arr.length;

    for(let i = 0; i < n-1; i++){
        // console.log("first loop", arr[i])

        for ( let j =0; j < n -i -1; j++){
            console.log("array lenght minus the index minus 1",n-i-1)
            console.log("second loop", j)
            // if(arr[j] > arr[j + 1]) {
            //     let temp = arr[j + 1];
            //     console.log("temp", temp);
            //     arr[j] = arr[j + 1];
            //     console.log("temp again", temp);
            //     arr[j + 1] = temp;
            //     console.log("temp three", temp)
            // }
        }
    }

}


const string = 'hello world';

// bubbleSortString(string)

// const maxSubArray = (nums) => {
//     let currentSum = nums[0];
//     let maxSum = nums[0];

//     for(let i=1; 1< nums.length; i++) {

//     }
// }



// const nums = [2, -3, 4, -2, 2, 1, -1, 4];
// console.log(maxSubArray(nums));

// function twoSum(nums, target) {

//     let addIndex = 0;
//     const sumTarget = [];
//     for(let i=1; i < nums.length; i++){
//         // console.log(nums[addIndex] + nums[i])
//         if(nums[addIndex] + nums[i] === target){
//             // return [addIndex, i];
//             sumTarget.push(addIndex, i)
//         }
//         addIndex++;
//     }
//         return sumTarget;
// }


const twoSum = (nums, target) => {

    const adder = {};

    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        console.log("adderdifference", adder[difference])
        // // Check if the difference exists in the hashmap
        // if (adder[difference] !== undefined) {
        //     // If it exists, return the indices of the two numbers
        //     return [adder[difference], i];
        // }

        if( adder.hasOwnProperty(difference)){
            return [adder[difference], i]
        }
        adder[nums[i]] = i; 
        
    }

    // console.log("adder",adder);
    return [];
}
// const nums = [3,4,5,6]
// const target = 7

// // const nums = [5,4,6]
// // const target = 10
//* console.log(twoSum(nums, target))


//! hashmap
//https://neetcode.io/problems/is-anagram
const isAnagram = (s,t) => {

    if (s.length !== t.length){
        return false;
    }

    const charCount = {};

    for (let char of s) {

        //? if(charCount[chart] === undefined){
        //?     charCount[char]=0;
        //? }

        //? charCount[char] += 1;

        //this is the shorthand version
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(charCount)
        // console.log(charCount)
    }

    for( let char of t){
        console.log("TTT", charCount[char])
        if(!charCount[char]){
            return false
        }
        charCount[char]--;
    }

    return true;
}


// const isAnagram = (s,t) => {

//     const news = s.split('').sort();
//     const newt = t.split('').sort();

//     if( news.join('') === newt.join('')){
//         return true;
//     }
//     return false;
// }




const s = 'racecar';
const t = "carrace";

//* console.log(isAnagram(s, t))




const findMinIndex = (arr) => arr.reduce((minIndex, currentValue, index, array) => {
    // console.log("minIndex", minIndex);
    // console.log('currentValue', currentValue);
    // console.log("index", index);
    // console.log("array", array);
    
    if (currentValue < array[minIndex]) {
        console.log(`New minimum found: ${currentValue} at index ${index}`);
        return index;
    } else {
        return minIndex;
    }
}, 0);


// Function to update the minimum value
const updateMinValue = (arr, multiplier) => {
    const minIndex = findMinIndex(arr);
    console.log("updateMinValue", minIndex)
    return arr.map((value, index) =>
        index === minIndex ? value * multiplier : value
    );
};

// Recursive function to perform the operation k times
const performOperations = (nums, k, multiplier) => {
    const update = (arr, count) => 
        count === 0 ? arr : update(updateMinValue(arr, multiplier), count - 1);
    return update(nums, k);
};

// Example usage
// const nums = [2,1,3,5,6];
const k = 5;
const multiplier = 2;
// console.log(performOperations(nums, k, multiplier));
// performOperations(nums, k, multiplier)
// console.log(findMinIndex(nums))



// const getFinalState = function(nums, k, multiplier) {
    
//     while (k > 0) {
//         for(let i = 0; i < k; ++i) {
//             m = Math.min(...nums)
//             index = nums.indexOf(m)
//             nums[index] *=  multiplier
//         }
//         return nums
// };
// }
// const nums = [2,1,3,5,6]
// const k = 5
// const multiplier = 2

// console.log(getFinalState(nums, k, multiplier))

const containsDuplicate2 = function (nums, k) {
    // console.log(nums);

    //sets can only hold unique values
    let windowSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];

        // .has is a method for Set, checks if the set contains the passed in value
        if (windowSet.has(currentValue)) {
            return true;
        }

        windowSet.add(currentValue);

        // .size is a Set method, length will not work
        console.log("dot size", windowSet.size);

        if (windowSet.size > k) {
            windowSet.delete(nums[i - k]);
        }
    }

    return false
};



const containsDuplicate = (nums) => {
    let window = [];

    for (let end = 0; end < nums.length; end++) {
        let currentValue = nums[end]

        for (let i = 0; i < nums.length; i++) {
            if (window[i] === currentValue) {
                return true;
            }
        }

        window.push(currentValue)
        console.log(window)
    }

    return false;
}

// const nums = [1,1,1,3,3,4,3,2,4,2];
// const nums = [1,2,3,4];
// nums = [1, 2, 3, 1];
// const k = 3;

//! console.log(containsDuplicate(nums, k))

// const randomLetters = ['G', 'B', 'X', 'A', 'M', 'R', 'Z', 'P', 'E', 'C'];
// const randomWords = ['apple', 'mountain', 'river', 'guitar', 'elephant', 'pencil', 'jungle', 'rocket', 'window', 'car'];


// console.log("sorted", randomWords.sort())