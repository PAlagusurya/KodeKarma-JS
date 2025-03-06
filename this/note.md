### THIS KEYWORD

- By default, JavaScript runs in non-strict mode, which is more lenient and allows certain bad coding practices without throwing errors.
- Strict mode was introduced in ES5 (ECMAScript 5) to enforce better coding practices and prevent potential bugs.

### WORKING OF THIS IN DIFFERENR SCENARIOS:

- Arrow functions inside an object refer to the global object in both strict and non-strict modes.
- However, an asynchronous function inside a regular function will reference the global scope—`window` in non strict mode and `undefined` in strict mode.
- On the other hand, an asynchronous arrow function inside a regular function retains the `this` context of the object it was created in.
