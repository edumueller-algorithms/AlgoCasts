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
  const hA = {};
  const hB = {};
  stringA = stringA.toLowerCase().replace(/ /gi, '');
  stringB = stringB.toLowerCase().replace(/ /gi, '');

  for (let v of stringA) {
    hA[v] = hA[v] + 1 || 1;
  }
  for (let v of stringB) {
    hB[v] = hB[v] + 1 || 1;
  }

  let anagram = true;
  [...Object.keys(hA), ...Object.keys(hB)].forEach((k) => {
    console.log(k);
    if (hA[k] !== hB[k]) anagram = false;
  });
  return anagram;
}

module.exports = anagrams;
