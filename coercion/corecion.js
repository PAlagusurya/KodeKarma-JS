function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
console.log(isObject({})); // true
console.log(isObject([])); // false
console.log(isObject(null)); // false

const arr = [1, 2, 3];
const result = arr.keys();
console.log([...result]); // Array Iterator {}

function index(value) {
  return !isNaN(value) && value !== null && typeof value !== "boolean";
}

console.log(index(1));
console.log(index("1"));
console.log(index(null));
console.log(index(true));
console.log(index(false));

!isNaN(value);
