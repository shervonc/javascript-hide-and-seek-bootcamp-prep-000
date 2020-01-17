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
        let master = document.querySelectorAll('#grand-node');
    for (let a = 0;a < master.length;a++) {
      let child = master[a].children
   for (let y = 0, z = child.length; y<z;y++) {
     child[y] = child[y].innerHTML
   }
    }
      
    }
    
    
  
  