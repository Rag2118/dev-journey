const input=document.getElementById("input");
const output=document.getElementById("output");
input.addEventListener("keydown",(event)=>{
    output.textContent=`Key Down : ${event.key}`;
    if(event.key==="Enter"){
    output.textContent="Form Ready 🚀";
} 
});
input.addEventListener("keyup",(event)=>{
    output.textContent=`key Up : ${event.key}`;
    if(event.key==="Escape"){
    output.textContent="Cancelled ❌";
}
});
