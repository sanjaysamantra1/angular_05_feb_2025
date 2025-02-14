let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

//   1. declare array of employees & sort them in ascending order (empId)
employees.sort((a,b)=>a.eId-b.eId);
console.log(employees);
//2. declare array of employees & sort them in ascending order by name.
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);
// 3. declare array of employees & filter the employees whose sal>6000;
let SalaryEmployees = employees.filter(emp => emp.sal > 6000);
console.log(SalaryEmployees);
// 4. declare array of employees & increase sal of every employee by 500;
let updatedEmployees = employees.map(emp => ({
  ...emp,  
  sal: emp.sal + 500 
}));
console.log(updatedEmployees);
//5. declare array of employees & add "comp:ibm" to every employee;
let addCmpny = employees.map(emp => ({
  ...emp,  
  comp: 'ibm'
}));console.log(addCmpny);
 //convert array of letters to array of words
// const inputArr = [ 
//   'b', 'a', 'k', 'e', '',
//   'c', 'a', 'k', 'e', '',
//   'e', 'a', 't'
//   ];
// output = ['bake','cake','eat'];
const inputArr = [ 
  'b', 'a', 'k', 'e', '',
  'c', 'a', 'k', 'e', '',
  'e', 'a', 't'
];
function convert() {
  return inputArr
      .join('')  // Convert array to string
      .split(' ') // Split by empty string delimiter
      .filter(word => word.length > 0); // Remove empty strings
}
console.log("words:", convert()); 

// add Dept info for each employee
// employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
//    { eId: 104, name: "reena", sal: 8000, gender: "female" }]
// departments = [{ eId: 101, dept: "sales" },
//     { eId: 104, dept: "marketing" }]
employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
   { eId: 104, name: "reena", sal: 8000, gender: "female" }]
  department = [{ eId: 101, dept: "sales" },
      { eId: 104, dept: "marketing" }]

const addingData = employees.map(emp => ({
  ...emp,
  dept: department.find(dept => dept.eId === emp.eId)?.dept || "No Department"
}));

console.log(addingData);

// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}
EmpName = employees.reduce((acc, emp) => {
  if (!acc[emp.name]) {
    acc[emp.name] = [];
}
acc[emp.name].push(emp);
return acc;
}, {});

console.log(EmpName);


// 9. intersection of 2 number arrays
array1 = [1, 2, 3, 4, 5];
array2 = [3, 4, 5, 6, 7];
function Intersection(arr1, arr2) {
   set1 = new Set(arr1);
  return arr2.filter(num => set1.has(num));
}

console.log(Intersection(array1, array2));

// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

  function count(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1; 
        return acc;
    }, {});
}
console.log(count(input));





