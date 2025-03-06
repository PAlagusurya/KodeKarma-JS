const obj1 = {
  value: 25,
  //Regular async function has its own this value and executes with respect to global scope
  printThisRegular: function () {
    setTimeout(function () {
      console.log(this.value);
    }, 500);
  },
  //Arrow function does not have its own this. It uses the parent's this value
  printThisArrow: function () {
    setTimeout(() => {
      console.log(this.value);
    }, 500);
  },
};

//obj1.printThisRegular(); //undefined
//obj1.printThisArrow(); //25

//But if the function itself is an Arrow Function then it will not have its own this value

const obj2 = {
  a: 1,
  print: function () {
    let innerPrint = () => {
      console.log(this.a);
    };
    innerPrint();
  },
};

obj2.print();
