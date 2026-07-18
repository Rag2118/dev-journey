const img=document.querySelector("#profile");
img.setAttribute("src","person2.jpg");
img.setAttribute("alt","New Profile Picture");
img.setAttribute("title","Developer Profile");
img.classList.add("round");
const h2=document.getElementById("name")
h2.classList.add("highlight");
console.log(img.hasAttribute("title"));