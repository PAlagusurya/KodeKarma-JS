"use strict";

console.log(this); //global object

function callMe() {
  console.log(this);
}

callMe(); //undefined

const obj1 = {
  name: "surya",
  age: 25,
  executeFn: () => {
    console.log(this);
  },
};

//global object
obj1.executeFn();
//But when you use variable to store function reference and tehn call it later then this refers to global object
const executeFn = obj1.executeFn;
executeFn(); //global object

const obj2 = {
  name: "surya",
  age: 25,
  executeFn: function () {
    console.log(this);
  },
};

obj2.executeFn(); //refer to the obj2

const executeFn2 = obj2.executeFn;
executeFn2(); //undefined
