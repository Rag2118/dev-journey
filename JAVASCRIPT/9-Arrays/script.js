let students=["Raghul","Sachin","Gobi","Pranav"];
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[3]);
students.push("Hari");
students.unshift("Vijay");
console.log(students);
students.pop();
students.shift();
console.log(students.includes("Pranav"));
//
console.log(students.indexOf("Sachin"));
console.log(students.slice(0,3));
console.log(students);
students.splice(0,0,"Leo");
let newstu=["Google","Amazon"];
let finalarr=newstu.concat(students);
console.log(students.join(","));