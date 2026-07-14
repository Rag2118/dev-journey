//name
function greet(name){
    console.log("Hello",name);
}
greet("Raghul!");

//sum of two num
function add(a,b){
    return a+b;
}
console.log("Sum:",add(10,20));

//square of num
let num1=Number(prompt("Enter num"));
function square(){
    return num1 * num1;
}
console.log("Square value:",square(num1));

//isEven
let num=Number(prompt("Enter num"));
function even(){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log("IsEven:",even(num));

//callback
function welcome(name){
    console.log("Welcome to JavaScript Functions",name);
}
function showMessage(callback){
    callback("Raghul");
}
showMessage(welcome);