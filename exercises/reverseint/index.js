// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString();
  let negative = false;
  if (str.includes('-')) {
    str = str.replace('-', '');
    negative = true;
  }
  const integer = parseInt(str.split('').reverse().join(''));
  return negative ? -1 * integer : integer;
}

module.exports = reverseInt;
