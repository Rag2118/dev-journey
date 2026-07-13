//heading
console.log("numbers from 1 to 20");
for (let i=1; i<=20; i++){
    console.log(i);
}
//heading
console.log("\nEven Numbers:");
let i=2;
while(i<=20){
    console.log(i);
    i+=2;
}
//heading
console.log("\n Odd Numbers");
i=1;
do{
    console.log(i);
    i+=2;
}while(i<=20);
//heading
console.log("\nSum of 1 to 20:");
let sum=0;
for(let i=1; i<=20;i++){
    sum+=i;
}
console.log(sum);