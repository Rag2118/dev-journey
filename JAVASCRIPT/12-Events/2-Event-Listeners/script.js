const title=document.getElementById("title");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    title.textContent="Welcome!";
});
btn.addEventListener("click",function(){
    title.style.color="blue";
});