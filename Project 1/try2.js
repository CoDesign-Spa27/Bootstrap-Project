// -----------------
// execution context and lexcial environment
// -----------------
 
function first(){
     var a=10;
     console.log(a)
     function second(){
          var b=2;
          console.log(b)
     }
}
first(second())