console.log("function");

let firstName ="Tatiana";
let lastName = "McCray";

console.log(`Hello ${firstName} ${lastName} ${1+1},welcome`);



//1.function declaration (creating a function)
function sayHello(){
    //body of the function
    console.log("Hello Beyonce");
}


//2. call the function (code, console, from the user)
sayHello();
sayHello();



//Example -2 with 1 parameter (inputs)
function greet(name){
    console.log(`Hello ${name}, welcoame!`);
}
greet("Michelle");
greet("Kelly");







//Example 3 with 2 parameter (inputs)
function greet2(name1="Kelly",name2){
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2("Kelly","Rowland");
greet2();


function doubleNumber(num1){
    let total = num1*2;
    console.log(total);

}

//Ex 4. with prompt
function welcome(){
    let name2 = prompt("Tatiana");
    let age = prompt("36");

    console.log(`Welcome ${name2} - ${age}`);
}

// Example 5 default parameters
function add(num1=0,num2=0){
    console.log(`The total is ${num1 + num2}`);
}

add(3,5);//8
add();
add(4);




function combinNmae(firstName="Tatiana",lastName="McCray"){
    console.log(`${firstName} ${lastName}`);

}

combinNmae("Tatiana","McCray"); 
combinNmae("Tatiana");
combinNmae();

function convertToSeconds(min){
    console.log(min*60);
}