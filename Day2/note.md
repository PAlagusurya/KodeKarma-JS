## SCOPE:

- Variables declared with `let` or `const` inside a block are confined to that block and cannot be accessed outside, whereas variables declared with `var` are accessible beyond the block.
- The scope of a variable is determined by its lexical environment, which consists of the local memory and the lexical environment of its parent.
- If a child has access to its parent's lexical environment, it can reference variables and functions declared within its parent.
- The JavaScript engine first looks for a variable in the current local environment. If not found, it searches in the parent's lexical environment, continuing up the chain until it reaches `null`. This process is known as the **scope chain**. If the variable is not found anywhere in this chain, it is considered out of scope.
- Shadowing occurs when a variable declared in an inner scope has the same name as a variable in the outer scope, effectively overriding it within that scope.
- Illegal Shadowing happens when a variable declared with var (which has function or global scope) is accessible outside its block, and then a let or const variable with the same name is declared in the same scope, leading to an error.
- A function bundled with its lexical environment is known as a closure. When a function is returned, even if its execution context is gone, it still remembers the references it was pointing to. It’s not just the function that is returned, but the CLOSURE itself.
