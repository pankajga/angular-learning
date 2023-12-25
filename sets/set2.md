# What is hoisting ?
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:

### Example 1
```
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```

### Example 2
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

### This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

### Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

Using a const variable before it is declared, is a syntax error, so the code will simply not run.

Example
This code will not run.
```
carName = "Volvo";
const carName;
```

## It is just moving the declaration to the top of undefined value, which is later initialized to some value.
## In case of let and const Hoisting is done, but not initialized,,this is the reason for the error when we access the let variable before declaration/initialization

# var vs let vs const
var	let	const
### The scope of a var variable is functional scope.	
### The scope of a let variable is block scope.	
### The scope of a const variable is block scope.

### It can be updated and re-declared into the scope.	
### It can be updated but cannot be re-declared into the scope.	
### It cannot be updated or re-declared into the scope.

### It can be declared without initialization.	
### It can be declared without initialization.	
### It cannot be declared without initialization.

### It can be accessed without initialization as its default value is “undefined”.	
### It cannot be accessed without initialization otherwise it will give ‘referenceError’.	
### It cannot be accessed without initialization, as it cannot be declared without initialization.

### hoisting done, with initializing as ‘default’ value	
### Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization	
### Hoisting is done, but not initialized (this is the reason for the error when we access the const variable before declaration/initialization

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
```

# What is scope and types of scope in JS ?
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


```
let emp = [
    {
        "name": "abc",
        "age": 30
    },
    {
        "name": "xyz",
        "age": 20
    },
    {
        "name": "cde",
        "age": 25
    },
    {
        "name": "fgh",
        "age": 28
    }
]

const result = emp.filter((value) => {
    return value.age < 26;
})

const app = document.getElementById('app');

result.map((value) => {
    console.log('value.name');
})

result.map(({map, age}) => {
    const dataToShow = `${name} : ${age}`
    console.log('data => dataToShow');
    app.innerHTML = dataToShow // will only print latest
    app.appendChild = `<p> ${dataToShow} </p>;
})
```

# Q. Add an click event in JS ?

```
const divSelect = document.getElementById('app');
divSelect.addEventListener('click', () => {
    console.log('Hello');
});
```

# Q. Error handling
We can use try catch block to handle errors in JS & Angular.
Similar to the Exception class, we have ErrorHandler in Angular and we can create custom error handler by implementing the above error handler.

```
class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    // do something with the exception
  }
}

@NgModule({
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})
class MyModule {}
```


# Q. What is a Promise ?
In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life.
pending: This is the default state of a defined promise
fulfilled:  This is the state of a successful promise
rejected: This is the state of a failed promise

```
const promise = new Promise((resolve, reject) => {
    let value = 5;
    if (value < 4) {
        resolve(`Value is less than 4`);
    } else {
        reject(`Value is greater than 4`);
    }
});

promise.then((result) => {
    console.log(result);
})
.catch((error) => console.log('error:',error));
```


# Q. What is a Prototype ?

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

All JavaScript objects inherit properties and methods from a prototype.

In the previous chapter we learned how to use an object constructor:
```
Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

We also learned that you can not add a new property to an existing object constructor:
```
Example
Person.nationality = "English";
```

To add a new property to a constructor, you must add it to the constructor function:
```
Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

## Prototype Inheritance

All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:

```
Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
```

The JavaScript prototype property also allows you to add new methods to objects constructors:
```
Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```


# Q. Class Inheritance in JS ?
Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:
```
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.


# Q. What is closure ?
Closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Lexical scoping
Consider the following example code:

```
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().


# Q. What is ViewEncapsulation ?

View encapsulation
In Angular, a component's styles can be encapsulated within the component's host element so that they don't affect the rest of the application.

The Component decorator provides the encapsulation option which can be used to control how the encapsulation is applied on a per component basis.

Choose from the following modes:


MODES	DETAILS
### ViewEncapsulation.ShadowDom	
Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot, used as the component's host element, and apply the provided styles in an isolated manner.

### ViewEncapsulation.Emulated	
Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application, emulating Shadow DOM behavior. For more details, see Inspecting generated CSS.

### ViewEncapsulation.None	
Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application. This mode is essentially the same as including the styles into the HTML itself.


# Q. flatmap vs switchmap vs concatmap
switchMap, mergeMap, concatMap and exhaustMap are rxjs flattening operatators.
https://dev.to/hssanbzlm/switchmap-mergemap-concatmap-and-exhaustmap-like-you-have-never-seen-109o
### Merge Map
won't wait for the first observable to complete before starting with the second.
### Concat Map
will wait for the first observable to complete, then will start the second observable.
### Switch Map
will return only the latest observable not previous, other features similar to concat.
### Exhaust Map
will only pick the first observable and ignore all others.


# Q. Lazy Loading in Angular ?
### Lazy-loading feature modules
https://angular.io/guide/lazy-loading-ngmodules#config-routes
By default, NgModules are eagerly loaded. This means that as soon as the application loads, so do all the NgModules, whether they are immediately necessary or not. For large applications with lots of routes, consider lazy loading —a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

```
ng generate module customers --route customers --module app.module
```

```
<h1>
  {{title}}
</h1>

<button type="button" routerLink="/customers">Customers</button>
<button type="button" routerLink="/orders">Orders</button>
<button type="button" routerLink="">Home</button>

<router-outlet></router-outlet>
```

```
src/app/app-routing.module.ts

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
```

```
src/app/customers/customers.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
```

```
src/app/customers/customers-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
```