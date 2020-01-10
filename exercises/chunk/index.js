// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // ********** Solution 1 ***********
  // let chunkArr = []
  // // splice by chunk size push to new array
  // while (array.length >= size ) {
  //   chunkArr.push(array.splice(0, size))
  // }
  // // remaining
  // if (array.length > 0) {
  //   chunkArr.push(array)
  // }
  // return chunkArr


  // ********** Solution 2 ***********
  let chunkArr = []
  for ( let element of array) {
    const last = chunkArr[chunkArr.length - 1]

    if (!last || last.length === size) {
      chunkArr.push([element])
    } else { 
      last.push(element)
    }
  }
  return chunkArr
}


module.exports = chunk;
