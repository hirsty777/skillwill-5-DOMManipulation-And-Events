const textDiv = document.querySelector("#lorem-text");
const removeBtn = document.querySelector("#remove-btn");

removeBtn.addEventListener("click",()=>{
    textDiv.style.display = "none"// hide
    //textDiv.remove()// remove
})