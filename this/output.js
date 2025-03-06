//OUTPUT BASED QUESTIONS:

//QUESTION 1:

const user = {
  firstName: "Alagusurya",
  getName() {
    const firstName = "Surya";
    return this.firstName;
  },
};

console.log(user.getName()); //Alagusurya

//QUESTION 2:

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user1 = makeUser();
console.log(user1.ref.name); //undefined

//but to make it refer to the parent
function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
const user2 = makeUser2();
console.log(user2.ref().name); //John

//QUESTION 3:

const test = {
  name: "surya",
  logMessgae() {
    console.log(this.name);
  },
};

//this will refer to the global object
setTimeout(test.logMessgae, 500);

//To make it refer to the test object
//1:
setTimeout(test.logMessgae.bind(test), 500);
//2:
setTimeout(function () {
  test.logMessgae();
}, 500);

//QUESTION 4:

//Create object calculator with sum and mul

let calculator = {
  //   a: 20,
  //   b: 30,
  read() {
    this.a = 10;
    this.b = 20;
  },
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//QUESTION 5:

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    console.log(fn);
    fn();
  },
};

object.method(callback);

//QUESTION 6:

var length = 4;
function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};

object2.method(callback, 2, 3); //3

//QUESTION 7:

let calculator1 = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  mul(num) {
    this.total *= num;
    return this;
  },
  sub(num) {
    this.total -= num;
    return this;
  },
};

const result = calculator1.add(10).mul(2).sub(2);
console.log(result.total);
