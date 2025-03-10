var age = 15; // global scope

function myAge(){
    console.log(age);
}
myAge();

 // function scope
function myName(){
   var name = "Aryan";
   console.log(name);
}
myName();

// block scope

{
    var number = 78954;
    console.log(number);
}
    console.log(number);

// let Keyword

let Myclass = 12;  // declare and assigned

console.log(Myclass);

Myclass = 13; // re-assigned

console.log(Myclass);

Myclass = "Aryan"; // re-assigned

console.log(Myclass);

console.log(Myclass);


// const

const atm_pin = 123456;
console.log(atm_pin)
