//your JS code here. If required.
let btn=document.getElementById("enter");
let para=document.getElementById("status");

btn.addEventListener("click",()=>{
    para.innerText="";
    let head=document.createElement("h1");
    head.innerHTML="Entered Metaverse"
    para.appendChild(head);
})

