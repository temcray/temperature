console.log("conditionals");

//if-statement (condition = y/n?)
//if(condition) {
//  code to be executed if the condition is true
//}else{
//code to run if the conition is false   

//}


if (3 < 5) {
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if (student1 == student2) {
    console.log("The values are the same");
}

//if-else staatment
//if(condition) {
//  code to be executed if the condition is true
//}else{
//code to run if the conition is false   
//}

let isTrue = false;
if (isTrue == true) {
    console.log("Yes");
} else {
    console.log("No");
}


let waterTemp = 102;

if (waterTemp >= 100) {
    console.log("The water is boiling");
} else {
    console.log("The water is NOT boiling");
}


//Challenge 1:
//Check if the age is greater then 21
//T: display "you are an adult"
//F: display "you are underage"

let age = 30;

if(age>21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

//else -if statment
//if(condition) {
//  code to be executed if the condition1 is true
//}else if(conition2){
//code to run if the conition2 is true   
//}else{
//code to run if conditions were false
//}

age = prompt("Enter your age;");


if(age<13){
    console.log("you are a child");
}else if(age<21){
    console.log("you are a teenager");
}else if(age<64){
    console.log("you are an adult");
}else{
    console.log("you are a senior");
}

//challenge 2:

//Scenario:
//you're desiging a tiny system for self-driving bikes.
//Instructions:
//ask for the traffic light color
//("green", "yellow", or "red") and tell the bike what to do (Go!, Slow down, stop)

let light = prompt("Enter the color:");

if(light=="green"){
    console.log("Go!");
}else if(light=="yellow"){
    console.log("slow down");
}else if(light=="red"){
    console.log("stop");
}else{
    console.log("Invalid color!");
}

function ticketCalculator(){
    let age = prompt("Enter your age");
    let price=0;

    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }

    return "your ticket price is " + price;
}
document.write(ticketCalculator());













































































//switch-cause
//use it for checking none single variable or expression

let act
