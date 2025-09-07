/*

varibale  --> 4 type
a) automatic
b) var --> redeclare , reinititilized, global scope
c) let  --> never redeclare, reinitialized , Block scope
d) const --> never reinitialized, never redeclare, Block scope

*/
var a = 10;  // --> global scope, re-declare and re-initialized
console.log(a);

{
    var a = 20;
    console.log(a);  // --> 20
}

console.log(a); // --> 10


let b = 10;  // never redeclare in same scope, reinitlaize
console.log(b);

{
    let b = 30;
    console.log(b); // --> 30
}

b = 50;
console.log(b);

const c = 20;  // can't redeclare in same scope, never reinitialied

{
    const c = 30;
    console.log(c);
}


c = 50; // error 
console.log(c);


