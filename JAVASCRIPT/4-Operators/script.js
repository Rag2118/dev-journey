let studentName="Raghul";
let age=20;
let marks=82;
let attendance=78;
let result=age>=18 && marks>=60 && attendance>=75 ? "Eligible For Placement":"Not Eligible";
marks+=3;
attendance++;
console.log("StudentName:",studentName);
console.log("Age:",age);
console.log("Marks:",marks);
console.log("Attendance:",attendance);

console.log("Adult:",age>=18);
console.log("Pass:",marks>=60);
console.log("Good Attendance:",attendance>75);

console.log("Placement Status:",result);