let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
//Sort employees by eId in ascending order:

employees.sort((a, b) => a.eId - b.eId);
console.log(employees);

//Sort employees by name in ascending order:
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);

//3. declare array of employees & filter the employees whose sal>6000;
let filteredEmployees = employees.filter(employee => employee.sal > 6000);
console.log(filteredEmployees);

//4. declare array of employees & increase sal of every employee by 500;
employees.forEach(employee => employee.sal += 500);
console.log(employees);

//5. declare array of employees & add "comp:ibm" to every employee;
employees.forEach(emp => emp.comp = "ibm")
console.log(employees)

//6. convert array of letters to array of words
const inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
    ];
    
    
    //7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
        { eId: 104, name: "reena", sal: 8000, gender: "female" }]
departments = [{ eId: 101, dept: "sales" },
        { eId: 104, dept: "marketing" }]


for (let employee of employees) {
    let dept = departments.find(department => department.eId === employee.eId);
    employee.dept = dept ? dept.dept : 'Unknown'; // Assign dept or 'Unknown' if not found
}

console.log(employees);

//8. declare array of employees & groupBy employees-name
// sample output: {
//     'sanjay' : [{},{}],
//     'alok' : [{}]
// }
let employee1 = [
    { name: 'sanjay', age: 30, department: 'IT' },
    { name: 'alok', age: 25, department: 'HR' },
    { name: 'sanjay', age: 32, department: 'Finance' }
  ];
  
  let groupedEmployees = employee1.reduce((acc, emp) => {
    acc[emp.name] = acc[emp.name]  []; // If name doesn't exist, initialize with an empty array
    acc[emp.name].push(emp); // Push employee object into the respective group
    return acc;
  }, {});
  
  console.log(groupedEmployees);
  
  
  
  //9. intersection of 2 number arrays
  const arr9 = [1, 2, 3, 4];
  const arr10 = [3, 4, 5, 6];
  
  let intersection = arr9.filter(n => arr10.includes(n));
  console.log("Intersection:", intersection);
  
  //10. WAP to print the occurance of each elements 
//   input = [10,20,30,40,50,10,30,50]
//   output = {10:2, 20:1, 30:2 , 40:1, 50:2}
  // const input = [10, 20, 30, 40, 50, 10, 30, 50];
  
  const input = [10, 20, 30, 40, 50, 10, 30, 50];

let occurrences = input.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log("Occurrences:", occurrences);



  