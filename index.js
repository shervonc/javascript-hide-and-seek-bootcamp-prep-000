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
  function deepestChild(){
  var master = document.getElementById('grand-node')
  var child = master.children[0]
  
  while (child){
    master = child
    child = master.children[0];
  }
  return master;
}
    
    
  
  