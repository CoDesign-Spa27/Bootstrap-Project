       //  First Class Function 
 // Assign a function to a variable
const greet= function() {
    console.log(`Hello Codesign`);
  };
  
  // Pass a function as an argument to another function
  function  functionAsArguments(callback) {
    callback() ;
  }
  
  // Return a function from a function
  function createGreeter(name) {
    return function() {
      console.log(`Hello ${name}!`);
    };
  }
  
  // Usage
  greet(); //"Hello, Codesign!"

   functionAsArguments(greet); //  "Hello, Codesign!"
  
  const greeter = createGreeter("Codesign");
  greeter(); // "Hello, Codesign!"