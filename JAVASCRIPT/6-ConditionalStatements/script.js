let name=prompt("Student Name:");
let mark=Number(prompt("Marks:"));
if (mark>=90 && mark<=100){
    console.log("Grade: A");
}else if(mark>=75 && mark<90){
    console.log("Grade: B");
}else if(mark>=50 && mark<75){
    console.log("Grade: c");
}else if(mark>=35 && mark<50){
    console.log("Pass");
    alert("Congratulations! You Passed.");
}else if(mark>=0 && mark<35){
    console.log("Fail");
    alert("Better Luck Next Time.");
}else{
    console.log("Invalid Mark");
    console.log("Invalid Mark Entered.");
}
