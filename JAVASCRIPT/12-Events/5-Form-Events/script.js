const input=document.getElementById("input");
const output=document.getElementById("para");
const form=document.getElementById("form");
input.addEventListener("focus",()=>{
    output.textContent="Typing Started...";
});
input.addEventListener("input",(event)=>{
    console.log(event.target.value);
});
input.addEventListener("change",(event)=>{
    console.log("Input changed");
});
input.addEventListener("blur",()=>{
    output.textContent="Typing Ended";
});
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("Form Submitted Successfully");
});