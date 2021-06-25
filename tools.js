let undo = document.querySelector("#undo");
let redo=document.querySelector("#redo");


undo.addEventListener("click", undoLine);
redo.addEventListener("click",redoLine);


function undoLine() {

    if(lineDB.length){

      let undoline=  lineDB.pop();   
      redolineDB.push(undoline); 
        // ctx.clearReact(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
        drawLineFromDb();

    }



}

function redoLine() {

    // console.log("jdxjsm");
    if (redolineDB.length) {
        let redoLine = redolineDB.pop();

        for (let i = 0; i < redoLine.length; i++) {


            let pointofObject = redoLine[i];
            if (pointofObject.type == "md") {
                ctx.beginPath();
                ctx.moveTo(pointofObject.x, pointofObject.y);
            }
            else {

                ctx.lineTo(pointofObject.x, pointofObject.y);
                ctx.stroke();
            }



        }
        lineDB.push(redoLine);
    }
   

}

    









function drawLineFromDb() {

    for (let i = 0; i < lineDB.length;i++) {

        let line = lineDB[i];

        for (let i = 0; i < line.length; i++) {

            let pointofObject = line[i];
            if (pointofObject.type== "md") {

                ctx.beginPath();
                ctx.moveTo(pointofObject.x, pointofObject.y);
            }
            else {
                ctx.lineTo(pointofObject.x, pointofObject.y);
                ctx.stroke();
            }
        }
    }




}