console.log(this); //global object

function callMe() {
  console.log(this);
}

callMe(); //global object

const obj1 = {
  name: "surya",
  age: 25,
  executeFn: () => {
    console.log(this);
  },
};

//This will refer to the global object because of arrow function
obj1.executeFn();

//But when you use variable to store function reference and then call it later then this refers to global object
const executeFn = obj1.executeFn;
executeFn();

const obj2 = {
  name: "surya",
  age: 25,
  executeFn: function () {
    console.log(this);
  },
};

//This refers to the global object
const executeFn2 = obj2.executeFn;
executeFn2();

//This refers to the obj2
obj2.executeFn();

const person1 = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

const person2 = {
  name: "Raghu",
  age: 20,
  greet: function (a, b) {
    console.log(a, b, "Hello, my name is " + this.name);
  },
};

//This refers to the person1
person2.greet.call(person1, 1, 2);
person2.greet.apply(person1, [1, 2]);

//This refers to the person1 and not global object
const executeFn3 = person2.greet.bind(person1, 1, 2);
executeFn3();
