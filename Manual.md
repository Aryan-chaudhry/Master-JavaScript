# What is JavaScript

JavaScript is a versaile programming language commonly used in web development to enhace the user experience on internet
its is primary utilised for implementing a functionality of web applications

## Is JavaScript is Programming Language or Scripted Language

### Programming Language

Programming Language are compiled Language, which mean that the source is code is compiled to convert it into machine code 
A programming language is a computer language which is used to communicate with computers using a set of instructions. Programming languages utilize compilers and do not rely on interpretation by another language or application.

### Scripted Language

Scripting languages are those languages which are interpreted rather than compiled, meaning they are executed line-by-line by the interpreter at the runtime thus allowing for quicker development cycles and easier debugging.
Scripting languages are commonly used for tasks such as system administration, web development, text processing and automation.

## In  which category javaScript fall?

### Conclusion

All the scripting languages are programming languages. Technically, JavaScript falls under both categories. It shares traits of scripting languages but also possesses the capabilities of many general-purpose programming languages. At the end we can say that JavaScript is both a scripting language and a light-weight programming language, that can be used for a wide range of tasks, from simple automation to complex application development.

# How javaScript is executed?

JavaScript is executed by javaScript Engines

## JavaScript Engines

A JavaScript engine is the software that takes our JavaScript code and translates it into instructions that your computer can understand. It is like a powerful interpreter.

Some of the most popular JS engines today are :

1. ```V8``` - Developed by Google, V8 is one of the most widely used JavaScript engines. It powers the JavaScript execution in Google Chrome and Node.js.

2. ```SpiderMonkey``` - Developed by Mozilla Firefox, SpiderMonkey is the JavaScript engine used in the Firefox web browser. It was one of the first JavaScript engines ever created and is known for its performance and compliance with JavaScript standards.

3. ```JavaScriptCore``` - Used in Safari, known for its tight integration with Apple devices.

4.  ```Chakra``` - Developed by Microsoft, Chakra was the JavaScript engine used in the Edge web browser. It has now been replaced by the Chromium-based Edge browser, which uses V8 as its JavaScript engine.

# Variables

Variable is a name of Memory which store data in it

In javaScript we have three type of variable

1. ```var```
2. ```let```
3. ```const```

## Did you know? 
```Let``` & ```const``` were introduced in 2015 as new features of JavaScript. Before that, ```var``` was the only way to declare a variable.

### What is ECMAScript?
Have you ever heard someone referring to JavaScript as ES6 or ES7 and felt confused about it?

Let me introduce you to another name for JavaScript, i.e., ECMAScript. Yes, you heard it right, the official name of JavaScript is ECMAScript. So, what do those numbers (ES6, ES7, etc.) signify? JavaScript was created more than 25 years ago, and since then, it has undergone significant evolution. Numerous new features and syntax have been added to JavaScript over the years. Initially, it took years to introduce new features to the existing language. However, modern JavaScript is updated annually with the addition of new features. JavaScript ES6 is the version of JavaScript that was released in 2015, and many major changes to the Javascript standard came with Javascript ES6.

Until 2015, Javascript versions were named by version number like ES1, ES2, ES3, etc., ES6 was the last Javascript version to be named in this way, and before the end of 2015 ES6 was renamed to ES2015 (ECMAScript 2015).

1. ### var
The var keyword was the traditional way of declaring variables in JavaScript. Variables declared with var are function-scoped or globally-scoped, but not block-scoped. This means that variables declared with var are hoisted to the top of their function or global scope. This hoisting behavior can sometimes lead to unexpected results and make debugging challenging.

Example


```
function example() {
    var x = 10;
    console.log(x);
}

example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined
```

### Reassignment and Redefinition using var

In JavaScript, the var keyword allows variables to be both reassigned and redefined within the same scope, unlike let which only allows reassignment. This behavior of var can sometimes lead to unexpected results and bugs in code if not used carefully.

Let's see an example :


```
// Re assignment using var
var x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank
```


```
// Re definition using var
var x = 10;
console.log(x);    // Output : 10

var x = "Mayank";
console.log(x);    // Output : Mayank
```

2. ### let
In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.

```
let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined
```
### Reassignment and Redefinition using let
Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing more predictable and maintainable code.

```
// Re assignment using 'let'

let x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank
```

```
// Re definition using 'let'

let x = 10;

let x = "Mayank";
console.log(x);    // Output : Error!
```

3. ### const
In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

```
const x = 20;
console.log(x);      // Output : 20

x = 30;
console.log(x);      // Output : Error!
```

# JavaScript Operators

## Overview
JavaScript operators are symbols used to perform operations on values and variables. These operators help in manipulating data, making decisions, and implementing logic in JavaScript programs.

## Types of Operators

1. **Arithmetic Operators** - Perform mathematical operations.
2. **Assignment Operators** - Assign values to variables.
3. **Comparison Operators** - Compare values and return boolean results.
4. **Logical Operators** - Used for boolean logic operations.
5. **Bitwise Operators** - Work on binary representations of numbers.
6. **Ternary Operator** - A shorthand for conditional expressions.

## Arithmetic Operators

| Operator | Description | Example |
|----------|------------|---------|
| `+` | Addition | `5 + 2 = 7` |
| `-` | Subtraction | `5 - 2 = 3` |
| `*` | Multiplication | `5 * 2 = 10` |
| `/` | Division | `5 / 2 = 2.5` |
| `%` | Modulus | `5 % 2 = 1` |
| `**` | Exponentiation | `5 ** 2 = 25` |
| `++` | Increment | `let a = 5; a++ = 6` |
| `--` | Decrement | `let a = 5; a-- = 4` |

## Assignment Operators

| Operator | Description | Example |
|----------|------------|---------|
| `=` | Assign | `x = 10` |
| `+=` | Add and assign | `x += 5` (same as `x = x + 5`) |
| `-=` | Subtract and assign | `x -= 5` |
| `*=` | Multiply and assign | `x *= 5` |
| `/=` | Divide and assign | `x /= 5` |
| `%=` | Modulus and assign | `x %= 5` |
| `**=` | Exponentiate and assign | `x **= 2` |

## Comparison Operators

| Operator | Description | Example |
|----------|------------|---------|
| `==` | Equal to | `5 == "5" // true` |
| `===` | Strict equal | `5 === "5" // false` |
| `!=` | Not equal | `5 != "5" // false` |
| `!==` | Strict not equal | `5 !== "5" // true` |
| `>` | Greater than | `5 > 3 // true` |
| `<` | Less than | `5 < 3 // false` |
| `>=` | Greater than or equal to | `5 >= 5 // true` |
| `<=` | Less than or equal to | `5 <= 4 // false` |

## Logical Operators

| Operator | Description | Example |
|----------|------------|---------|
| `&&` | Logical AND | `true && false // false` |
| `||` | Logical OR | `true || false // true` |
| `!` | Logical NOT | `!true // false` |

## Bitwise Operators

| Operator | Description | Example |
|----------|------------|---------|
| `&` | Bitwise AND | `5 & 3` |
| `|` | Bitwise OR | `5 | 3` |
| `^` | Bitwise XOR | `5 ^ 3` |
| `~` | Bitwise NOT | `~5` |
| `<<` | Left shift | `5 << 1` |
| `>>` | Right shift | `5 >> 1` |

## Ternary Operator

Syntax:
```javascript
condition ? expression1 : expression2
```
Example:
```javascript
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```

## Conclusion
This document provides an overview of JavaScript operators and their usage. Mastering these operators is crucial for writing efficient JavaScript programs.
