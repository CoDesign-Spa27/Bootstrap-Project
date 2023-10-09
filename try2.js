// -----------------
// Ways to create objects in javascript
//Part-2
// -----------------
 
// 1. Using Object.create() to create new objects
// const comObj = { company: 'ABC Corp' };

// const employee=Object.create(comObj,{name:{value:"Employee NAme"}})

// console.log(employee.company)
// console.log(employee.name)




// 2. Using Object.assign() to create new objects

const obj1={name:"Bardock"}
const obj2={anime:"DBZ"}

const obj3=Object.assign({},obj1,obj2)

console.log(obj3)
 