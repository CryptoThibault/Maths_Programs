const square1 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]
const square2 = [
  [1, 15, 14, 4],
  [12, 6, 7, 9],
  [8, 10, 11, 5],
  [13, 3, 2, 16],
]
const square3 = [
  [11, 24, 7, 20, 3],
  [4, 12, 25, 8, 16],
  [17, 5, 13, 21, 9],
  [10, 18, 1, 14, 22],
  [23, 6, 19, 2, 15],
]
const square4 = [
  [6, 32, 3, 34, 35, 1],
  [7, 11, 27, 28, 8, 30],
  [19, 14, 16, 15, 23, 24],
  [18, 20, 22, 21, 17, 13],
  [25, 29, 10, 9, 26, 12],
  [36, 5, 33, 4, 2, 31],
]

const carre = (x) => x * x
const reducer = (accumulator, currentValue) => accumulator + currentValue

function isMagicSquare(tab) {
  const size = tab.length
  var check = size * 2 + 2
  var count = 0
  var rottab = []; var d1tab = []; var d2tab = [];

  for (i = 1; i - 1 < carre(size); i++) { count += i } //Count sum for each (row,col,diag)
  count /= size

  for (j = 0; j < size; j++) {
    if (tab[j].reduce(reducer) === count) { check-- } //Check row
    var xtab = []
    for (k = 0; k < size; k++) {
      xtab.push(tab[k][j])
    }
    rottab.push(xtab)
    if (rottab[j].reduce(reducer) === count) { check-- } //Check col
    d1tab.push(tab[j][j])
    d2tab.push(tab[j][size - 1 - j])
  }
  if (d1tab.reduce(reducer) === count) { check-- } //Check diag1
  if (d2tab.reduce(reducer) === count) { check-- } //Check diag2

  return check === 0 //true:false
}




console.log(`The square 1 is ${isMagicSquare(square1) ? 'magic' : 'normal'}.`)
console.log(`The square 2 is ${isMagicSquare(square2) ? 'magic' : 'normal'}.`)
console.log(`The square 3 is ${isMagicSquare(square3) ? 'magic' : 'normal'}.`)
console.log(`The square 4 is ${isMagicSquare(square4) ? 'magic' : 'normal'}.`)