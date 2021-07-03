let photo=document.querySelector("#photo");
let photoUpload=document.querySelector("#photo-upload");
let download=document.querySelector("#download");
console.log(photoUpload);

photo.addEventListener("click",function(){
    photoUpload.click();
})

photoUpload.addEventListener("change",function(e){

    let file=e.target.files[0];

    let FileUrl=URL.createObjectURL(file);
    console.log(FileUrl);

    let img=document.createElement("img");
    img.setAttribute("src",FileUrl);

    // document.querySelector("body").append(img);
    img.classList.add("sticky-image")
    StickyAddOnClick(img);

})


download.addEventListener("click",function(){

    let ImagePath=canvas.toDataURL("image/jpg");
   
    let aTag=document.createElement("a");

    aTag.download="canvas.jpg";
    aTag.href=ImagePath;
    aTag.click();
    


})