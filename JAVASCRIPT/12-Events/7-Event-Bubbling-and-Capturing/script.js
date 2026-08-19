const grandparent=document.getElementById("grandparent");
const parent=document.getElementById("parent");
const btn=document.getElementById("btn");
grandparent.addEventListener("click",function(){
    console.log("Grandparent");
}, true);
parent.addEventListener("click",function(){
    console.log("Parent");
},true);
btn.addEventListener("click",function(){
    console.log("Button");
});