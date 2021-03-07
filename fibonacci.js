console.log(Fibonaccilist(15).join('  '))
console.log(Fibonacciratio(2000, 1200, 161.8))

function Fibonaccilist(range) {
  var list = [0, 1]
  for (i = 0; i < range; i++) {
    list.push(list.slice(-1)[0] + list.slice(-2)[0])
  }
  return list
}
function Fibonacciratio(x, y, lvl) {
  return (x - y) * (lvl / 100) + y
}