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
