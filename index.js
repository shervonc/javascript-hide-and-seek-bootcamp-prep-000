function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(` #nested .target` )
}
function increaseRankBy(n) {
  const List = document.querySelector("ul ranked-list li")
  for (let i=0, i<n;i++) {
  List[i] = parseInt(List[i]) + 1
  }
}