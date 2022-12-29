// Q.1 Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript?
// Local scope: A local scope is created within a function and is only available within that function. Variables declared within a local scope are only accessible within the function and are not accessible from the outside.

// Block scope: A block scope is created within a block of code, which is a group of statements surrounded by curly braces {}. Variables declared within a block scope are only accessible within the block and are not accessible from the outside. In JavaScript, block scope is created using the let and const keywords, which were introduced in ECMAScript 6.

// Functional scope: A functional scope is created within a function and is only available within that function and any nested functions. Variables declared within a functional scope are only accessible within the function and any nested functions, and are not accessible from the outside.

// The scope chain is the hierarchy of scopes that are searched for a variable or function when it is accessed. When a variable or function is accessed, the JavaScript engine starts by searching the local scope. If the variable or function is not found in the local scope, the engine moves up the scope chain and searches the next outer scope, and so on until it reaches the global scope. If the variable or function is not found in any of the scopes in the scope chain, a ReferenceError is thrown.

// function outerFunction() {
  // Local scope
//   let localVariable = 'This is a local variable';

  // Block scope
//   if (true) {
//     let blockVariable = 'This is a block variable';
//     console.log(blockVariable); // Output: 'This is a block variable'
//   }
//   console.log(blockVariable); // ReferenceError: blockVariable is not defined

//   // Functional scope
//   function innerFunction() {
//     // Local scope
//     let innerLocalVariable = 'This is an inner local variable';
//     console.log(innerLocalVariable); // Output: 'This is an inner local variable'
//   }
//   innerFunction();
// }
// outerFunction();



// Q.2 What is difference between null and undefined ?
// undefined is a value that is assigned to a variable that has not been initialized, or to an object property that does not exist. It is also the value returned by a function that does not return a value.

// null is a value that represents the absence of an object. It is an explicit representation of the lack of an object, as opposed to undefined, which represents the lack of a value.

// let x;
// console.log(x); // Output: undefined

// let y = null;
// console.log(y); // Output: null

// let z = {};
// console.log(z.foo); // Output: undefined



// Q.3 What is an event loop and call stack
// Ans:- The event loop and the call stack are two important concepts in JavaScript that are responsible for how the language executes code.
// The event loop is a mechanism that waits for and handles events in JavaScript. It listens for events and executes the associated event handlers when they occur. The event loop allows JavaScript to perform non-blocking operations, as it can continue to execute code while waiting for events to occur.

// The call stack is a data structure that stores the execution context of a program. It tracks the execution of functions and the variables that are in scope at each point in the program. When a function is called, it is added to the top of the call stack. When the function returns, it is removed from the top of the call stack. If the call stack becomes too large, it can cause a stack overflow error.

// console.log('Start');

// setTimeout(function() {
//     console.log('Timeout function');
//   }, 0);
  
//   console.log('End');




// Q.4 What are promises and why do we need them?
// Ans:- In JavaScript, a promise is an object that represents the result of an asynchronous operation. It allows you to write asynchronous code in a way that is more manageable and easier to understand.

// Promises are useful because they provide a way to handle the asynchronous nature of JavaScript code in a more straightforward and predictable way. Without promises, asynchronous code can become difficult to understand and maintain, as it can involve the use of callback functions and the management of multiple different states.

// Promises have three states:

// Pending: The promise is in the pending state when it is waiting for the asynchronous operation to complete.

// Fulfilled: The promise is in the fulfilled state when the asynchronous operation has completed successfully and a value is available.

// Rejected: The promise is in the rejected state when the asynchronous operation has failed and an error is available.

// Promises provide a way to handle the success or failure of an asynchronous operation using then and catch methods. The then method is called when the promise is fulfilled, and the catch method is called when the promise is rejected.


// const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
//   setTimeout(() => {
//     resolve('The operation was successful');
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result); // Output: 'The operation was successful'
//   })
//   .catch((error) => {
//     console.error(error);
//   });




// Q.4 What is promise chaining?
// Ans:- In JavaScript, promise chaining is a technique for creating a sequence of asynchronous operations using promises. It allows you to chain multiple promises together, so that the results of one promise can be used as the input for the next promise in the chain.

// Promise chaining is useful because it allows you to write asynchronous code in a more straightforward and predictable way, without the need for callback functions or the management of multiple different states.

// function getData(url) {
//     return new Promise((resolve, reject) => {
//       // Asynchronous operation to fetch data from the server
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }
  
//   getData('https://api.example.com/users')
//     .then((users) => {
//       console.log(users);
//       return getData('https://api.example.com/posts?userId=' + users[0].id);
//     })
//     .then((posts) => {
//       console.log(posts);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  


// Q.5 What are pure functions?
// Ans:-    It always returns the same output for a given set of inputs.
// It does not have any side effects, meaning it does not modify any external state or produce any observable effects.
// It does not depend on any external state or variables that are not passed as arguments.
// Pure functions are useful because they are predictable and easy to understand. They can be tested and reused in different contexts without any unintended consequences.

// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2)); // Output: 3
// console.log(add(1, 2)); // Output: 3


  
