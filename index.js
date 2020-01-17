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
    
      let Deepchild = master.children[b]
      
      for ( let x =0,y=Deepchild.length; x<y;x++) {
      return Deepchild[x].innerHTML
    }
  }
  }