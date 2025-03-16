function addToList(numbers, item) {
  //numbers.push(item);
  //return numbers
  const newArray = [...numbers, item];
  return newArray;
}
const numbers = [1, 4, 3, 5];
addToList(numbers, 3);

function executeNumbers(numbers) {
  console.log(numbers);
}

executeNumbers(numbers);

/**
 * 
 * SUMMARY: 
Feature	         Pure Function	                                Impure Function
Deterministic	✅ Yes (always same output for same input)	     ❌ No (output may vary)
Side Effects	❌ No (does not modify external state)	         ✅ Yes (modifies state or does I/O)
Mutability	    ❌ No (does not change input)	                 ✅ Yes (modifies input)
Predictability	✅ High (safe to use in functional programming)	 ❌ Low (can cause unexpected behavior)
 */
