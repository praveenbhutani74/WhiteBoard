let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let penoption = pen.querySelector(".tool-option");
let eraserOption = eraser.querySelector(".tool-option");


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


    }
});

