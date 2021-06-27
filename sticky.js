
let sticky=document.querySelector("#sticky");


sticky.addEventListener("click",StickyAddOnClick);



function StickyAddOnClick(){

    let StickyDiv=document.createElement("div");
    StickyDiv.classList.add("sticky");
    StickyDiv.innerHTML=`<div class="sticky-header">
    <div class="minimize">
      <i class="far fa-window-minimize"></i>
    </div>
    <div class="close">
      <i class="fas fa-times"></i>  
    </div>
  </div>
  <div class="sticky-content" contenteditable="true" >

  </div>`


  let minimize=StickyDiv.querySelector(".minimize");
    let close=StickyDiv.querySelector(".close");
let StickyContent=StickyDiv.querySelector(".sticky-content");
let stickyHeader=StickyDiv.querySelector(".sticky-header");

    
  minimize.addEventListener("click",function(){
    StickyContent.style.display=="none"?StickyContent.style.display="block":StickyContent.style.display="none";
  })


    close.addEventListener("click",function(){
      StickyDiv.remove();
    })
   

    let stickyHold = false;
    let initialX;
    let initialY;
    stickyHeader.addEventListener("mousedown", function (e) {
        stickyHold=true;
        initialX = e.clientX;
        initialY = e.clientY;
    });
  
    stickyHeader.addEventListener("mousemove", function (e) {
        if(stickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
      
            let dx = finalX - initialX;
            let dy = finalY - initialY;
      
            let {top , left} = StickyDiv.getBoundingClientRect();
            //   sticky => top + dy
            //  sticky => left + dx
            StickyDiv.style.top = top + dy + "px";
            StickyDiv.style.left = left +dx + "px";
      
            initialX = finalX;
            initialY = finalY;
        }
    });
  
    stickyHeader.addEventListener("mouseup", function (e) {
        stickyHold = false;
    });
  

  document.body.append(StickyDiv);

  
}






