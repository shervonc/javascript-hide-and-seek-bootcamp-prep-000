function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(` #nested .target` )
}
function increaseRankBy(n) {
  const List = document.querySelectorAll(" .ranked-list")
  for (let i=0, i<list.length;i++) {
  List[i] = parseInt(List[i]) + 1
  }
}