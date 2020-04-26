/* 
Given an array of numbers, create a function which returns the same array 
but with each element's index in the array added to itself. 
This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
*/

// 1 input - array of numbers
function addIndexes(arr) {
    // result variable / accumulator
    var addedIndex = [];
    // iterating through array of numbers using a for loop
    for (var index = 0; index < arr.length; index++ ) {
	// adding index to each current element in the array
	var sum = arr[index] + index;
	// pushing the new elements to the result variable
	addedIndex.push(sum)
   }//returning the resulted array
   return addedIndex;
}

// testing our function by calling it
var result1 = addIndexes([0, 0, 0, 0, 0]) 
console.log(result1); // --> [0, 1, 2, 3, 4]

var result2 = addIndexes([1, 2, 3, 4, 5]) 
console.log(result2); // --> [1, 3, 5, 7, 9]

var result3 = addIndexes([5, 4, 3, 2, 1]) 
console.log(result3); // --> [5, 5, 5, 5, 5]
