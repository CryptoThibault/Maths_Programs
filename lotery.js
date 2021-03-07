const RANGE_NB = 29
const RANGE_LNB = 10

var users = 100
var DAY1 = pushDraw()
var DAY1_DRAW = getDraw()

// console.log(DAY1)
console.log(`Draw of the day: ${DAY1_DRAW.join(', ')}`)
checkWinner()

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}
function getDraw() {
  var draw = []
  var NB = 0
  for (i = 0; i < 5; i++) {
    NB = getRandomInt(RANGE_NB)
    if (draw.includes(NB)) { i-- }
    else { draw.push(NB) }
  }
  draw.push(getRandomInt(RANGE_LNB))
  return draw
}
function pushDraw() {
  var usersdraw = []
  for (j = 0; j < users; j++) {
    usersdraw.push(getDraw())
    usersdraw[j].push(`user n° ${j + 1}, `)
  }
  return usersdraw
}
function checkWinner() {
  var winners = ''
  for (l = 0; l < DAY1.length; l++) {
    var check = 0
    for (k = 0; k < 5; k++) {
      if (DAY1[l].includes(DAY1_DRAW[k])) {
        check++
        // console.log(`${DAY1[l][6]} have a right number: ${DAY1_DRAW[k]} `)
      }
    }
    if (DAY1[l].includes(DAY1_DRAW[5])) {
      check++
      // console.log(`${DAY1[l][6]} have the right lucky number: ${DAY1_DRAW[5]} `)
    }
    if (check === 6) { winners += DAY1[l][6] }
  }
  if (winners.length > 0) { console.log(`JACKPOT!!!\n${winners}have all the numbers!`) }
}