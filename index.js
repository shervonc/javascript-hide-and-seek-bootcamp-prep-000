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
  var node = document.getElementById('grand-node')
  var childNode = node.children[0]
  
  while (childNode){
    node = childNode
    childNode = node.children[0];
  }
  return node;
}
    
    
  
  