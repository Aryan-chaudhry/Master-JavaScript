// rest --> it pack the element, it work in destructrung and function paramter

const Account = {
    username : "Aryan",
    password : "@13&*%$$()*%$%!_)",
};

let { ...args} = Account;
console.log(args);

display = (...args) => {
    console.log(args);
}


display(1,2,3,4,5,6,7,8,9);
