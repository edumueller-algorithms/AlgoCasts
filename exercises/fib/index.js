// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// * LOOP SOLUTION (BEST):
// function fib(n) {
//   let arr = [1, 1];
//   for (let i = 1; i <= n; i++) {
//     arr.push(arr[i] + arr[i - 1]);
//   }
//   return arr[n - 1];
// }

// * RECURSIVE SOLUTION (NOT BEST):
// function fib(n) {
//   if (n <= 2) return 1;
//   let prev = 1;
//   let curr = 1;
//   let i = 3;
//   return genFib(i, n, curr, prev);
// }

// function genFib(i, n, curr, prev) {
//   if (i == n) return curr + prev;
//   i++;
//   return genFib(i, n, curr + prev, curr);
// }

module.exports = fib;
