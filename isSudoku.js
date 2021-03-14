function isSudoku(tab) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const size = tab.length
  const count = 45
  var check = size * 3
  var rottab = []; var boxtab = [];

  for (i = 0; i < size; i++) {
    var xtab = []; var ytab = [];
    if (i < 3) { var l = 0; var c = 3 * i }
    else if (i < 6) { var l = 3; var c = -9 + 3 * i }
    else if (i < 9) { var l = 6; var c = -18 + 3 * i }
    for (j = 0; j < size; j++) {
      xtab.push(tab[j][i])
      ytab.push(tab[l][c])
      c++
      if (j === 2 || j === 5) { l++; c -= 3 }
    }
    rottab.push(xtab)
    boxtab.push(ytab)
    if (tab[i].reduce(reducer) === count) { check-- } //Check row
    if (rottab[i].reduce(reducer) === count) { check-- }//Check col
    if (boxtab[i].reduce(reducer) === count) { check-- }//Check box
  }
  return check === 0
}

const grid1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
]
const grid2 = [
  [5, 3, 9, 8, 7, 6, 4, 1, 2],
  [7, 2, 8, 3, 1, 4, 9, 6, 5],
  [6, 4, 1, 2, 9, 5, 7, 3, 8],
  [4, 6, 2, 5, 3, 9, 8, 7, 1],
  [3, 8, 5, 7, 2, 1, 6, 4, 9],
  [1, 9, 7, 4, 6, 8, 2, 5, 3],
  [2, 5, 6, 1, 8, 7, 3, 9, 4],
  [9, 1, 3, 6, 4, 2, 5, 8, 7],
  [8, 7, 4, 9, 5, 3, 1, 2, 6],
]

console.log(`The first grid ${isSudoku(grid1) ? 'is' : 'is not'} a sudoku.`)
console.log(`The second grid ${isSudoku(grid2) ? 'is' : 'is not'} a sudoku.`)