//Nihareeka Mohanty

//closure is a function that retains access to its lexical scope even after the outer function has finished executing. 
//This means variables defined in an outer function can still be accessed by an inner function, allowing data to be preserved privately. 
// Closures are especially useful for creating encapsulated, reusable code modules—such as private counters, greeters, memoized functions, 
// and secure data containers like a todo list. They help in maintaining data privacy and avoiding global variable pollution, making the 
// code more organized, modular, and secure.

//Q1.

function makeCounter() {
    // 'count' is a private variable, not accessible outside the closure
    let count = 0;
  
    // The returned function has access to the 'count' variable
    return function() {
      count++;  
      return count; 
    };
  }

  const counter = makeCounter();
  
  console.log(counter());
  console.log(counter());
  console.log(counter());
  
  // The 'count' variable is private and cannot be accessed directly outside the closure
  // results in an error as 'count' is not accessible outside the closure  

  //Q2.
  function createGreeter(name) {
    // 'name' is stored in the lexical scope of the returned function
  
    // inner function forms a closure and retains access to 'name'
    return function() {
      return `Hello, ${name}! Welcome`;
    };
  }
  
  const greetAllen = createGreeter("Allen");
  const greetBobby = createGreeter("Bobby");
  
  console.log(greetAllen()); 
  console.log(greetBobby());  
  
  // The 'name' variable is private to each greeter and cannot be accessed directly
  // console.log(name); // This would result in an error

  //Q3.

  function multiplierFactory(factor) {
    // 'factor' is stored in the lexical scope of the returned function
  
    // This returned function is a closure that remembers 'factor'
    return function(number) {
      return number * factor;
    };
  }

  const double = multiplierFactory(2); 
  const triple = multiplierFactory(3); 
  const quadruple = multiplierFactory(4); 
  
  console.log(double(5));  
  console.log(triple(5));    
  console.log(quadruple(5));
  
  // The 'factor' variable is private to each closure
  // console.log(factor); // This would cause an error
  

  //Q4.

  function makeFibonacci() {
    // This object acts as a private cache and is enclosed in the closure
    const cache = {
      0: 0,
      1: 1
    };
  
    // This returned function has access to 'cache' even after makeFibonacci has returned
    return function fib(n) {
      // Handle invalid inputs
      if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return "enter a non-negative integer";
      }
  
      // Return cached value if available
      if (n in cache) {
        console.log(`Retrieving from cache`);
        return cache[n];
      }
  
      // Compute and cache the value if not already in cache
      console.log(`Computing F(${n})...`);
      cache[n] = fib(n - 1) + fib(n - 2); // Recursive call using memoization
      return cache[n];
    };
  }
  
  const fibonacci = makeFibonacci();
  
  console.log(fibonacci(0)); // 0
  console.log(fibonacci(1)); // 1
  console.log(fibonacci(6)); // 8
  console.log(fibonacci(8)); // 21
  console.log(fibonacci(6)); // From cache: 8
  console.log(fibonacci(-2)); // Invalid input
  console.log(fibonacci(3.5)); // Invalid input
  
  //Q5.

  function createTodoModule() {
    // Private array to store todos — not accessible outside this closure
    const todos = [];
  
    return {

        addTodo(task) {
        if (typeof task !== 'string' || task.trim() === '') {
          console.log("Invalid : provide a non-empty string");
          return;
        }
        todos.push(task.trim());
        console.log(`Added: "${task.trim()}"`);
      },
  
      removeTodo(index) {
        if (!Number.isInteger(index) || index < 0 || index >= todos.length) {
          console.log("Invalid index: Cannot remove");
          return;
        }
        const removed = todos.splice(index, 1);
        console.log(`Removed: "${removed[0]}"`);
      },
  
      listTodos() {
        return [...todos];
      },
  
      clearTodos() {
        todos.length = 0;
        console.log("All cleared");
      }
    };
  }
  
  const myTodo = createTodoModule();
  
  myTodo.addTodo("Buy groceries");
  myTodo.addTodo("Walk the dog");
  myTodo.addTodo("");               // invalid input
  myTodo.addTodo("  ");              // whitespace
  
  console.log("Current Todos:", myTodo.listTodos());
  
  myTodo.removeTodo(1);           
  myTodo.removeTodo(5);            // invalid index
  myTodo.removeTodo(-1);          // negative index
  
  console.log("After removal:", myTodo.listTodos());
  
  myTodo.clearTodos();
  
  console.log("Final Todos:", myTodo.listTodos());
  
  console.log("Direct access to todos?", myTodo.todos); // undefined
  
  /*
    The `todos` array is private and not accessible outside the function
    Only the returned object methods can interact with it
    Closure preserves access to `todos` even after `createTodoModule` has executed
  */
  