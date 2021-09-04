// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const h = {};
  for (let i = 0; i <= str.length; i++) {
    h[str[i]] = h[str[i]] + 1 || 1;
  }

  let maxI;
  for (let i in h) {
    if (!maxI || h[i] > h[maxI]) {
      maxI = i;
    }
  }

  return maxI;
}

module.exports = maxChar;
