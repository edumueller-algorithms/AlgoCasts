// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matx = [...Array(n)].map((e) => Array(n).fill(null));
  let sRow = (sCol = 0);
  let eRow = (eCol = n - 1);
  let elem = 1;

  while (sCol <= eCol && sRow <= eRow) {
    // moves right
    for (let col = sCol; col <= eCol; col++) {
      matx[sRow][col] = elem;
      elem++;
    }
    sRow++;
    // moves down
    for (let row = sRow; row <= eRow; row++) {
      matx[row][eCol] = elem;
      elem++;
    }
    eCol--;
    // moves left
    for (let col = eCol; col >= sCol; col--) {
      matx[eRow][col] = elem;
      elem++;
    }
    eRow--;
    // moves up
    for (let row = eRow; row >= sRow; row--) {
      matx[row][sCol] = elem;
      elem++;
    }
    sCol++;
  }

  return matx;
}

module.exports = matrix;
