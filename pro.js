const selected=document.getElementsByTagName("body")[0]

function setcolor(name){

    selected.style.backgroundColor= name
}

function selection() {
    const cal1=Math.round(Math.random()*255)
    const cal2=Math.round(Math.random()*255)
    const cal3=Math.round(Math.random()*255)
  const final=`rgb( ${cal1} , ${cal2} , ${cal3} )`
  selected.style.backgroundColor=final
}

selection()
