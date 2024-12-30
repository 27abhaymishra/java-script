// let pencilPrice = 10;
// let erasorPrice = 5;
// console.log("The total is :" , pencilPrice + erasorPrice ,"Rupees.");
// console.log(`The total is : ${pencilPrice + erasorPrice} Rupees.`);

// let color = "green";

// //Traffic Light System
// if(color === "red"){
//     console.log("Stop ! light color is red");
    
// }
//  else if(color === "yellow"){
//     console.log("Slow down. light color is yellow");
    
// }
// else if(color === "green"){
//     console.log("Go. light color is green");
    
// }

// let size = "XL";

// if(size === "XL"){
//     console.log("The price is Rs.250");
    
// }else if(size === "L"){
//     console.log("The price is Rs.200");
    
// }else if(size === "M"){
//     console.log("The price is Rs.100");
    
// }else{
//     console.log("price is Rs.50");
    
// }

//Switch Statement

// let color = "red";

// switch (color) {
//     case "red":console.log("stop");
//     break;
//     case "yellow" : 
//     console.log("slow down");
//     break;
//     case "green" : 
//     console.log("go");
//     break;
//      default:
//     console.log("light is broken");
    
// }
// console.log("after switch stt");

// alert("This is an alert");
// console.error("This is an error");
// console.warn("This is a warning msg");
// let firstName = prompt("Enter your Name");
// console.log(firstName);

// let firstName = prompt("Enter your first Name");
// let lastName = prompt("Enter your lastName");
// console.log("welcome" ,firstName , lastName,"!");

// let str = " hello ";
// str = str.trim().toUpperCase();
// console.log(str);
    // let start = ['january', 'july' , 'march','august']
    // start.shift();
    // start.shift();
    // start.unshift('june');
    // start.unshift('july');
    // console.log(start);
    
    //  let colors = ["red" , "yellow" , "blue","orange" , "pink", "white"];
    // for(color of colors){
    //     console.log(color);
        
    // }
    
     // colors.splice(1,2,"green")
    // console.log(colors);    
                        
    //  let n = prompt("Enter your Number");
    //  n = parseInt(n);
    //  for(let i = 1; i<=10; i++){
    //     console.log(n*i);
        
    //  }    
//     arr = [1,2,3,4,5,6,2,3];
//    for(let i = 0; i<arr.length; i++){
//         if(arr[i] == 2){
//             arr.splice(i,1);
//         }
//     }
//     console.log(arr);
// let num = 287152;

// let sum = 0;
// while(num > 0){
    
//     let rem =num % 10;
//     sum += rem;
//     num = num / 10;
   
// }
// console.log(sum);

// const studentInfo = [
//     {
//         name:"Abhay",
//         grade:"A+",
//         city:"Delhi"
//     },{
//         name:"Harsh",
//         grade:"A",
//         city:"Bhopal"
//     },{
//         name:"kk",
//         grade:"B",
//         city:"kolkata"
//     }
// ];
// const studentData = {
//    Student1: {

//     name:"Abhay",
//     grade:"A+",
//     city:"Delhi"
//     },
//     Student2:{
//         name:"Harsh",
//         grade:"A",
//         city:"Bhopal"
//     },
//     Student3:{
//         name:"kk",
//         grade:"B",
//         city:"kolkata"
//     }
// };

// let num = Math.random();
// num = num * 100;
// num = Math.floor(num);
// num = num + 1;
// let ram = Math.floor(Math.random() * 100) + 1;
// let ramdom = Math.floor(Math.random() * 6)+1;
// let car = {
//     name:"Fortune",
//     model:"4*4",
//     color:"white"
// };

// const person = {
//     name:"abhay",
//     age:"22",
//     city:"bhopal"
// }

// function oddOrEven(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n % 2 == 0));
//         }
//     }else if(request == "even"){
//         return function(n){
//             console.log(n % 2 == 0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let vd = oddOrEven("even")       
// console.log(vd(6));

// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;
// function getElement(arr,num){
// for(let i =0; i<arr.length; i++){
//     if(arr[i] > num){
//         console.log(arr[i]);
//     }
// }
// }
// getElement(arr,num);

// let str = "abcdabcdefgggh";

// function unique(str){
//     let ans = "";

//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
//  let su = unique(str);
//  console.log(su);

// let country = ["Australia" ,"Germany" , "United State of America"];

// function longestCountry(country){
//     let ansIdx = 0;
//     for(let i = 0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(longestCountry(country));

// const avg = (a,b,c) =>{
//     return (a + b + c ) / 3;
// }
// const pow = (a,b) =>{
//     return a**b;
// }
// const powa = (a,b) =>(a**b);
// console.log("Hi ,there");

// setTimeout(()=>{
//     console.log("Apna College");
// },4000)
// console.log("Welcome too");
// let id = setInterval(()=> {
//     console.log("Apna college");
    
// } , 2000)

// console.log(id);

// let nums = [1,2,3,4,5,6,7];
// // let finalVal = nums.reduce((res , el)=>(res + el));
// // console.log(finalVal);
// let finalVal = nums.reduce((res , el)=>{
//     console.log(res);
//     return res * el;
    
// });
// console.log(finalVal);

// function sum(...args){
//     return args.reduce((res , el)=>{
//         return res + el ;
//     })
// }

// console.log(sum(2,34,4,5,6, 3,7));

// let nums = [1,2,3,4,5];
// let square = nums.map((el)=>{
//     return el * el;
// });
// console.log(square);
// let sum = square.reduce((sum , el)=>(sum + el));
// console.log(sum);

// let avg = sum / nums.length;
// console.log(avg);



