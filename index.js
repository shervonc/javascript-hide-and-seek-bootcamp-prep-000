function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(` #nested .target` )
}
function increaseRankBy(n) {
  const Rlist = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < Rlist.length; i++) {
      Rlist[i].innerHTML = parseInt(Rlist[i].innerHTML) + n;
    }
  }
  function DeepestChild() {
       const master = document.querySelectorAll('#grand-node');
    for (let a = 0 ; b = master.length; a < b ;a++) {
      let DeepChild = master[a].children
      return master[a].innerHTML
    }
  }