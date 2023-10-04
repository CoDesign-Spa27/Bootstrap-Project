// HIGH ORDER FUNCTION PART 3- Reduce()
let list=[
    {
        name:"jack",
        age:20,
        salary:12000
    },
    {
        name:"ryan",
        age:22,
        salary:20000
    },
    {
        name:"kevin",
        age:12,
        salary:15000
    } 
    , {
        name:"trevo",
        age:15,
        salary:25000
    }
]
 
const totalSalary=list.reduce((acc,value)=>{
    return acc+value.salary;
},0);
console.log(totalSalary)
 