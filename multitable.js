function generate_multitable() {
  var body = document.getElementsByTagName("body")[0]
  var tbl = document.createElement("table")
  var tblBody = document.createElement("tbody")
  var x = 0
  var y = 0
  while (y < 11) {
    var row = document.createElement("tr")
    while (x < 11) {
      if (x < 1) {
        var cell = document.createElement("th")
        var cellText = document.createTextNode(`${y}`)
      } else {
        if (y < 1) {
          var cell = document.createElement("th")
          var cellText = document.createTextNode(`${x}`)
        } else {
          var cell = document.createElement("td")
          var cellText = document.createTextNode(`${x * y}`)
        }
      }
      cell.appendChild(cellText)
      row.appendChild(cell)
      x++
    }
    tblBody.appendChild(row)
    y++
    x = 0
  }
  tbl.appendChild(tblBody)
  body.appendChild(tbl)
  tbl.setAttribute("border", "2")
} //https://developer.mozilla.org/fr/docs/Explorer_un_tableau_HTML_avec_des_interfaces_DOM_et_JavaScript