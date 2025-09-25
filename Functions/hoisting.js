// hosting is a behaviour when variable and function declaration is moved at the top

/*
    arrow function never hoisted
*/

sayHello();

// let sayHello = () => {
//     console.log("Hello");  // not hoisted
// }

function sayHello(){
    console.log("Hello");
}

