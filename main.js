var onClick = document.getElementById("onclick")
var ShowHide = document.getElementById("ShowHide")

onClick.addEventListener("click",()=>{
    ShowHide.classList.add("menutext")
    onClick.addEventListener("dblclick",()=>{
    ShowHide.classList.remove("menutext")
    })
})