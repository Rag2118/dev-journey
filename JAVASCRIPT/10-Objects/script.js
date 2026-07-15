let student={
    name:"Raghul",
    age:20,
    course:"BSc IT",
    marks:96,
    isPassed:true
};
console.log(student);
student.marks=98;
console.log(student.marks);
student.city="Bangalore";
console.log(student.city);
delete student.age;
console.log(student);
console.log("course" in student);
console.log(Object.keys(student));
console.log(Object.values(student));
for(let key in student){
    console.log(key,student[key]);
}
//method 
let student2={
    name:"Raghul",
    course:"BSc IT",
    marks:96,
    isPassed:true,
    city:"Bangalore",

    introduce:function(){
    console.log("Hi, I'm "+ this.name + ". I studying "+ this.course);
    },
    result:function(){
        console.log(this.isPassed ? "Passed": "Failed");
    }
};
student2.introduce();
student2.result();