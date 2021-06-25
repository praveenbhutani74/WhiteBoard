let canvas=document.querySelector("#canvas");


canvas.width=window.innerWidth;
canvas.height=window.innerHeight-100;

let isPenDown=false;

window.addEventListener("resize",function(e){
    canvas.width=window.innerWidth;
canvas.height=window.innerHeight-100;
})

let ctx=canvas.getContext("2d");

let lineDB=[];
let line=[];



canvas.addEventListener("mousedown",function(e){

   
    let x=e.clientX;
    let y=e.clientY-100;


    ctx.beginPath();
    ctx.moveTo(x,y);
    isPenDown=true;

    let pointofObject={

        x:x,
        y:y,
        type:"md"
    }
    line.push(pointofObject);


})

canvas.addEventListener("mousemove",function(e){

    let x=e.clientX;
    let y=e.clientY-100;
    
    if(isPenDown){
        
        ctx.lineTo(x,y);
        ctx.strokeStyle = "red";
        ctx.stroke();
        let pointofObject={

            x:x,
            y:y,
            type:"mm"
        }
        line.push(pointofObject);
    }
   
   


})


canvas.addEventListener("mouseup",function(e){

 
   isPenDown=false;
   lineDB.push(line);
   line=[];
    

});

