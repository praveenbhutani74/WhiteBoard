let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let penoption = pen.querySelector(".tool-option");
let eraserOption = eraser.querySelector(".tool-option");

let penSize = penoption.querySelector("#pensize");
let penColors = penoption.querySelectorAll(".pen-colors div");

let eraserSize=eraserOption.querySelector("#erasersize");


let currentPenSize="1";
let currentPenColor="black";
let currentEraserSize="1";




penSize.addEventListener("change", function (e) {

    let penSizeValue = penSize.value;

    currentPenSize=penSizeValue;
    ctx.lineWidth = currentPenSize;

});

eraserSize.addEventListener("change",function(e){

    let eraserSizeValue=eraserSize.value;

    currentEraserSize=eraserSizeValue;
    ctx.lineWidth=currentEraserSize;
})

for (let i = 0; i < penColors.length; i++) {

    penColors[i].addEventListener("click", function (e) {

        let PenColorsOnClick = e.target.className;
       currentPenColor=PenColorsOnClick;
        ctx.strokeStyle = currentPenColor;
      
    })
}

pen.addEventListener("click", function () {

    if (pen.classList.contains("active-tool")) {
        if (penoption.classList.contains("hide")) {
            penoption.classList.remove("hide");
        }
        else {
            penoption.classList.add("hide");
        }
    }
    else {

        eraser.classList.remove("active-tool");
        eraser.classList.add("fade");

        eraserOption.classList.add("hide");
        pen.classList.remove("fade");
        pen.classList.add("active-tool");

        ctx.lineWidth=currentPenSize;
        ctx.strokeStyle=currentPenColor;

    }
});

eraser.addEventListener("click", function () {

    if (eraser.classList.contains("active-tool")) {

        if (eraserOption.classList.contains("hide")) {
            eraserOption.classList.remove("hide");
        }
        else {
            eraserOption.classList.add("hide");
        }
    }
    else {

        pen.classList.remove("active-tool");
        pen.classList.add("fade");
        penoption.classList.add("hide");
        eraser.classList.remove("fade");
        eraser.classList.add("active-tool");

        ctx.strokeStyle="white";
        ctx.lineWidth=currentEraserSize;
    }
});


