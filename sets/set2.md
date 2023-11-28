#### What is hoisting ?
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:

## Example 1
```
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```

## Example 2
```
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
```
The let and const Keywords
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:

This will result in a ReferenceError:
```
carName = "Volvo";
let carName;
```

JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.

Example 1 does not give the same result as Example 2:

Example 1
```
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
```

Example 2
```
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y
```
Does it make sense that y is undefined in the last example?

## This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

## Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

Using a const variable before it is declared, is a syntax error, so the code will simply not run.

Example
This code will not run.
```
carName = "Volvo";
const carName;
```

## It is just moving the declaration to the top of undefined value, which is later initialized to some value.
## In case of let and const Hoisting is done, but not initialized,,this is the reason for the error when we access the let variable before declaration/initialization

#### var vs let vs const
var	let	const
# The scope of a var variable is functional scope.	
# The scope of a let variable is block scope.	
# The scope of a const variable is block scope.

# It can be updated and re-declared into the scope.	
# It can be updated but cannot be re-declared into the scope.	
# It cannot be updated or re-declared into the scope.

# It can be declared without initialization.	
# It can be declared without initialization.	
# It cannot be declared without initialization.

# It can be accessed without initialization as its default value is “undefined”.	
# It cannot be accessed without initialization otherwise it will give ‘referenceError’.	
# It cannot be accessed without initialization, as it cannot be declared without initialization.

# hoisting done, with initializing as ‘default’ value	
# Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization	
# Hoisting is done, but not initialized (this is the reason for the error when we access the const variable before declaration/initialization

```
var greeter = 'hey hi';
if (true) {
    var greeter = 'say hello instead';
}
console.log(greeter); // say hello instead
```

```
let greeter = 'hey hi';
if (true) {
    let greeter = 'say hello instead';
}
console.log(greeter); // hey hi
```

```
let greeter = 'hey hi';
if (true) {
    let hello = 'say hello instead';
}
console.log(hello); // Reference error hello is not defined

#### What is scope and types of scope in JS ?
Block scope
Function scope
Global scope
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

Example
```
{
  let x = 2;
}
// x can NOT be used here
```

Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

Example
```
{
  var x = 2;
}
// x CAN be used here
```

Function Scope
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:
```
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
```

Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.

Example
```
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
```
