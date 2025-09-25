let arr = [1,2,3,4,5,"Aryan"];

// accessing the data of array

// simple loop
console.log("Simple Loop")

for(let i=0; i<arr.length; i++){
    console.log(arr[i], " ");
}

// for of loop
console.log("for of loop")

for(el of arr){
    console.log(el)
}

// for in loop
console.log("for in loop")

for(el in arr){
    console.log(arr[el])
}

// foreach
console.log("for each loop")

arr.forEach((el)=>{
    console.log(el)
})

// methods

// map
const nums = arr.map((num) => {
    return num%2
});

console.log(nums)


const num2 = arr.map((num) => {
    return num*2;
})

console.log(num2);


// filter

const newarr = arr.filter((num) => {
    return num%2 === 0
})
console.log(newarr)

// reduce
const array = [1,2,3,4,5];
initialval = 1;
const product = array.reduce((accumulator, currval) => accumulator * currval, initialval);
console.log(product)
