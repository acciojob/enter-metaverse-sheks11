//your JS code here. If required.
let btn=document.getElementById("enterBtn");
let para=document.getElementById("status");

btn.addEventListener("click",()=>{
    para.style.display="none";
    let head=document.createElement("h1");
    head.innerHTML="Entered Metaverse"
    document.body.appendChild(head);
})
