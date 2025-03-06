let name1 = {
  firstName: "John",
  lastName: "Grady",
  age: 34,
};

let name2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 38,
};

let printName = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      ", " +
      state +
      " and am " +
      this.age +
      " years old."
  );
};

const arr = [name1, name2];

arr.forEach((name) => {
  printName.apply(name, ["Miami", "FL"]);
});

const result1 = printName.bind(name1, "Miami", "FL");
result1();

const result2 = printName.bind(name2, "Melbourne", "AUS");
result2();
