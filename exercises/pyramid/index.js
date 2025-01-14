// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += '#';
    var rPadded = str.padEnd(n, ' ');
    var right = rPadded.slice(1);
    var left = rPadded.slice(1).split('').reverse().join('');
    console.log(left + str[0] + right);
  }
}

module.exports = pyramid;
