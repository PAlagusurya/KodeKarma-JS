function Counter(b) {
  var count = 0;
  let a = 2;
  this.incrementCount = function () {
    count++;
    console.log(count, b);
  };
  this.decrementCount = function () {
    count--;
    console.log(count);
  };
  //   return function incrementCount() {
  //     count++;
  //     console.log(count);
  //   };
}

const result1 = new Counter("ho");
result1.incrementCount();

// const result = counter();
// result();
// result();
// counter()();
