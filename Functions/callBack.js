
const calculate = (a,b, operation) => {
    return operation(a,b);
}

operation = ( a, b) => {
    console.log(a+b);
}

calculate(2,3, operation)