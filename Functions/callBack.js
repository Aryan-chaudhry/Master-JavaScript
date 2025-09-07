
const calculate = (a,b, operation) => {
    return operation(2,3);
}

operation = ( a, b) => {
    console.log(a+b);
}

calculate(2,3, operation)