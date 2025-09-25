const user = {
    name : "Aryan",
    age: 21
};

// Object --> json
const json = JSON.stringify(user);
console.log(json);


// json --> object
const obj = JSON.parse(json);
console.log(obj);
