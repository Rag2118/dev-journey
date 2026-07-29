const heading=document.querySelector("h2");
heading.textContent="Rag N";
const para=document.querySelector("p");
para.textContent="Aspiring full stack developer";

//create new li
const li=document.createElement("li");
li.textContent="REACT";
console.log(li.textContent);

//append new li
const skills=document.getElementById("skills");
skills.append(li);
skills.firstElementChild.textContent="🌟 "+ skills.firstElementChild.textContent;

//output after update
console.log(heading);
console.log(para);
console.log(skills.innerText);

//remove element
skills.lastElementChild.remove();

//output after remove
console.log(skills.innerText);

//access elements by traversing
console.log(skills.firstElementChild.innerText);
console.log(skills.lastElementChild.innerText);