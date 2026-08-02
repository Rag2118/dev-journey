const box=document.getElementById("box");
let btn=document.getElementById("btn");
btn.ondblclick=function(){
    box.style.backgroundColor="blue";
    box.style.color="black";
}
box.onmouseover=function(){
    box.textContent="Mouse Inside";
}
box.onmouseout=function(){
    box.textContent="Mouse Outside";
}
btn.onmousedown=function(){
    btn.textContent="Pressed";
}
btn.onmouseup=function(){
    btn.textContent="Released";
}