let nb = 101
var list = []
function primecheck(x) {
  for (i = 2; i < x + 1; i++) {
    var check = true
    for (j = 0; j < list.length; j++) {
      if (i % list[j] === 0) { check += false }
    }
    if (check === true) { list.push(i) }
  }
  return x === list[list.length - 1]
}
console.log(`The number ${nb} is ${primecheck(nb) ? '' : 'not'}prime.\nlist: ${list.join(' ')}`)
