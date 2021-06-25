let undo = document.querySelector("#undo");


undo.addEventListener("click", undoLine);


function undoLine() {

    if(lineDB.length){


        lineDB.pop();
    
    
        // ctx.clearReact(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
        drawLineFromDb();

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