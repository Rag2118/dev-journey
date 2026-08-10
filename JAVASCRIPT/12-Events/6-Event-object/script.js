const form=document.getElementById("form");
const box=document.getElementById("clickarea");
const p=document.getElementById("output");
const clickArea=document.getElementById("clickarea");
const name=document.getElementById("name");
const email=document.getElementById("email");
const selectCourse=document.getElementById("course");
clickArea.addEventListener("click",function(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
});
name.addEventListener("input",(event)=>{
    console.log(event.value);
});
email.addEventListener("input",(event)=>{
    console.log(event.value);
});
name.addEventListener("focus",()=>{
    p.textContent="Typing...";
});
name.addEventListener("blur",()=>{
    p.textContent="Typing Ended";
});
email.addEventListener("focus",()=>{
    p.textContent="Typing...";
});
email.addEventListener("blur",()=>{
    p.textContent="Typing Ended";
});
selectCourse.addEventListener("change",(event)=>{
    console.log(event.target.value);
});
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(selectCourse.value);
});
clickArea.addEventListener("click",(event)=>{
    console.log("Target: ",event.target);
    console.log("Current Target: ",event.currentTarget);
});
clickArea.addEventListener("mousemove",(event)=>{
    console.log("X:", event.clientX);
    console.log("Y:", event.clientY);
})