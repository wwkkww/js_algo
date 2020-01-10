// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  
  // const objA = createObj(stringA)
  // const objB = createObj(stringB)

  // if (Object.keys(objA).length !== Object.keys(objB).length) {
  //   return false
  // }

  // for (let key in objA) {
  //   if (objA[key] !== objB[key]) {
  //     return false
  //   }
  //   return true
  // }
  strA = stringA.replace(/[^\w]/g, '').toLowerCase()
  strB = stringB.replace(/[^\w]/g, '').toLowerCase()
  return strA.split('').sort().join('') === strB.split('').sort().join('')
}

// function createObj(str) {
//   const obj = {}
//   for (let letter of str.replace(/[^\w]/g, '').toLowerCase()) {
//     obj[letter] = obj[letter] + 1 || 1
//   }
//   return obj
// }


module.exports = anagrams;
