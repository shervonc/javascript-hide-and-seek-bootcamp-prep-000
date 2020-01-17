function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(` #nested .target` )
}
function increaseRankBy(n) {
   const RList = document.querySelectorAll('.ranked-list')

  for (let i = 0, x = RList.length; i < x; i++) {
    let child = RList[i].children

    for (let a = 0, b = child.length; a < b; a++) {
      child[a].innerHTML = parseInt(child[a].innerHTML) + n
    }
  }
} 