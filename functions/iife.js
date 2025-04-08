//IIFE (Immediately Invoked Function Expression) is a function in JavaScript that runs immediately after it is defined. It is useful for creating a private scope and avoiding global variable pollution.

//SAMPLE1:

!function () {
  var prefix = "message";
  console.log(prefix + " " + "Hello World!");
};
// Output:
// message Hello World!

//console.log(prefix); // ReferenceError: prefix is not defined

//SAMPLE2:

const Utils = () => {
  const secretKey = "ABC123";

  return {
    getSecretKey: () => secretKey,
  };
};

//app.js

// import Utils from "./Utils";

console.log(Utils().getSecretKey());

/**
 * IIFE is an excellent pattern for encapsulating logic, avoiding conflicts, reducing memory leaks, and optimizing JavaScript execution.
 * It plays a crucial role in modular development,
 * especially when handling utilities, configuration files, or
 * self-contained logic.
 */

/**
 * When you wrap code inside an IIFE,
 * it does not look outside its own scope because it creates a new, private execution context.
 */

const counter = () => {
  let count = 0;
  function increase() {
    return count++;
  }
  return {
    increment: increase,
    decrement: () => count--,
    getCount: () => count,
  };
};

const counter1 = counter();
console.log(counter1.increment());
console.log(counter1.increment());
