// let employees = [
//     { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
//     { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
//     { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
//     { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
// 	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
//   ];
  
// 1. declare array of employees & sort them in ascending order (empId)

// 2. declare array of employees & sort them in ascending order by name.

// 3. declare array of employees & filter the employees whose sal>6000;

// 4. declare array of employees & increase sal of every employee by 500;

// 5. declare array of employees & add "comp:ibm" to every employee;

// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];
	   
// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

// 9. intersection of 2 number arrays

// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}


let employees = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
      ];


//1-----------------------------------------------------------------------------------------------------------------
employees.sort((Emp1, Emp2) => Emp1.eId - Emp2.eId);
console.log(employees);

//2-----------------------------------------------------------------------------------------------------------------
employees.sort((Emp3, Emp4) => Emp3.name.localeCompare(Emp4.name));
console.log(employees);

//3-----------------------------------------------------------------------------------------------------------------
let highSalary = employees.filter(e => e.sal > 6000);
console.log(highSalary);

//4-----------------------------------------------------------------------------------------------------------------
let updatedSalaries = employees.map(e => 
  ({ ...e, sal: e.sal + 500 }));
console.log("New array with updated salaries:", updatedSalaries);

//5------------------------------------------------------------------------------------------------------------------
let CompanyTable = employees.map(e=>({...e,comp:"ibm"}))
console.log(CompanyTable);

//6-----------------------------------------------------------------------------------------------------------------
const inputArr = [ 
  				'b', 'a', 'k', 'e', '',
  				'c', 'a', 'k', 'e', '',
  				'e', 'a', 't'
          
  				];

  let arrayOfWords = inputArr.reduce((acc, letter) => {
  if (letter === '') {
      acc.push(''); // Start a new word in the next iteration
  } else {
      acc[acc.length - 1] += letter; // Append letter to the last word
  }
  return acc;
},['']); // Initialize with an empty string to start the first word
console.log(arrayOfWords); 

//7-----------------------------------------------------------------------------------------------------------------
let employee = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

let departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" }
];

let updatedEmployeesWithDept = employees.map(e => {let dept = departments.find(d => d.eId === e.eId)?.dept || null // Find dept or "Unknown"
  return { ...e, dept };
});
console.log(updatedEmployeesWithDept);

//8-----------------------------------------------------------------------------------------------------------------

let employee1 = [
  { name: 'sanjay', age: 30, department: 'IT' },
  { name: 'alok', age: 25, department: 'HR' },
  { name: 'sanjay', age: 32, department: 'Finance' }
];

let groupedEmployees = employee1.reduce((acc, emp) => {
  acc[emp.name] = acc[emp.name] || []; // If name doesn't exist, initialize with an empty array
  acc[emp.name].push(emp); // Push employee object into the respective group
  return acc;
}, {});

console.log(groupedEmployees);



//9-----------------------------------------------------------------------------------------------------------------
const arr9 = [1, 2, 3, 4];
const arr10 = [3, 4, 5, 6];

let intersection = arr9.filter(n => arr10.includes(n));
console.log("Intersection:", intersection);

//10-----------------------------------------------------------------------------------------------------------------
const input = [10, 20, 30, 40, 50, 10, 30, 50];

let occurrences = input.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log("Occurrences:", occurrences);
