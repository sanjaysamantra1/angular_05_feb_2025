
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  //1.declare array of employees & sort them in ascending order (empId)
  function sortbyid(employees){
    employees.sort((e1, e2) => e1.eId - e2.eId);

  }
  sortbyid(employees);
  console.log(employees);

 //2. declare array of employees & sort them in ascending order by name.
 function sortByName(employees) {
    employees.sort((e3, e4) => e3.name.localeCompare(e4.name));
}
sortByName(employees);
console.log(employees);

//3. declare array of employees & filter the employees whose sal>6000;
function filterEmp(employees) {
    return employees.filter(emp => emp.sal > 6000); 
}
let highestsal = filterEmp(employees);
console.log(highestsal);

//5. declare array of employees & add "comp:ibm" to every employee;
function addcompany(employees){
     employees.forEach(emp => emp.comp = "IBM");
}
addcompany(employees);
console.log(employees);

//6.convert array of letters to array of words  output = ['bake','cake','eat'];
const inputArr = ['b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'];


// console.log(arrayWords(inputArr));
// function arrayWords(arr) {
//     return arr.join('').split('').slice(0,4).join('').split('  ').filter(word => word !== '');
// }
// console.log(arrayWords(inputArr));


let arrayOfWords = inputArr.reduce((acc, letter) => {
    if (letter === '') {
        acc.push(''); 
    } else {
        acc[acc.length - 1] += letter; 
    }
    return acc;
}, ['']); 

console.log(arrayOfWords); 
	   
//7. add Dept info for each employee
const Employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
                
const Department = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]

for (let Emp of Employees) {
     const dept = Department.find(Department => Department.eId === Emp.eId);
                
    if (dept) {
    Emp.dept = dept.dept; 
    } else {
    Emp.dept = "Unknown";
  }
  }
  console.log(Employees);


//8.
let employee1 = [
    { name: 'sanjay', age: 30, department: 'IT' },
    { name: 'alok', age: 25, department: 'HR' },
    { name: 'sanjay', age: 32, department: 'Finance' }
  ];
  
  let groupedEmployees = employee1.reduce((acc, emp) => {
    
    if (!acc[emp.name]) {
      acc[emp.name] = [];
    }
    acc[emp.name].push(emp);
    return acc;
  }, {});
  
  console.log(groupedEmployees);
  

  //9.intersection of 2 number arrays
  const arr = [1,2,3,4,5,6];
  const arr2 = [3,4,10,7,8,9];

  const intersection =  arr.filter(val=> arr2.includes(val));
console.log(intersection);


/* 10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
    output = {10:2, 20:1, 30:2 , 40:1, 50:2} */

    const input = [10,20,30,40,50,10,30,50];

const charCount = input.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log(charCount);
                

