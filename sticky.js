
let sticky=document.querySelector("#sticky");


sticky.addEventListener("click",function(e){
  StickyAddOnClick();
});



function StickyAddOnClick(imageElement){

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
 

  </div>`

  let minimize=StickyDiv.querySelector(".minimize");
  let close=StickyDiv.querySelector(".close");
// let StickyContent=StickyDiv.querySelector(".sticky-content");
let stickyHeader=StickyDiv.querySelector(".sticky-header");

let StickyContent;
  
if(imageElement){

  // <div class="sticky-content" contenteditable="true" >

  let StickyImageDiv=document.createElement("div");
  StickyImageDiv.classList.add("sticky-image-div");
  StickyDiv.append(StickyImageDiv);
  StickyImageDiv.append(imageElement);
  StickyContent=StickyImageDiv;
}
else{

  let StickyContentDiv=document.createElement("div");
  StickyContentDiv.classList.add("sticky-content");
  StickyContentDiv.setAttribute("contenteditable","true")
  StickyDiv.append(StickyContentDiv);
  StickyContent=StickyContentDiv;



}


 

    
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






