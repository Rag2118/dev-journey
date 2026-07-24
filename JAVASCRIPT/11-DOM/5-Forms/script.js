const form=document.getElementById("form");
const name=document.getElementById("name");
const agree=document.getElementById("agree");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
console.log(name.value); 
console.log(agree.checked);});