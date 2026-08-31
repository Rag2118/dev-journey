const products=document.getElementById("products");
const p=document.getElementById("output");
products.addEventListener("click",(event)=>{
    p.textContent=event.target.innerText;
    console.log("Selected item:",p.textContent);
});