//1. declare array of employees & sort them in ascending order (empId)

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  
  employees.sort((empa,empb)=>empa.eId-empb.eId)
  console.log(employees);

 // 2. declare array of employees & sort them in ascending order by name.
 //.sort((empa,empb)=>empa.name-empb.name)
 // console.log("sorted on names: ",employees);

  employees.sort((empa,empb)=>empa.name.localeCompare( empb.name));
   console.log("sorted on names: ",employees);

//3. declare array of employees & filter the employees whose sal>6000;
let filter_sal = employees.filter(emp=>emp.sal>6000);
console.log("sal > 6000 employees: ",filter_sal);

//4. declare array of employees & increase sal of every employee by 500;

let e_bonus_salary = employees.map((emp)=>emp.sal+500);
console.log("employees bonus by 500",e_bonus_salary);

//5. declare array of employees & add "comp:ibm" to every employee;

employees.forEach(e=>e.comp="ibm");
console.log(employees)

/*
6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	   output = ['bake','cake','eat'];
*/
const inputArr = [ 
  'b', 'a', 'k', 'e', '',
  'c', 'a', 'k', 'e', '',
  'e', 'a', 't'
];

let output = [];
let word = '';

inputArr.forEach(letter => {
  if (letter !== '') {
    word += letter; // Add letter to word
  } else {
    output.push(word); // Push the word when an empty string is encountered
    word = ''; // Reset word for the next one
  }
});

// Add the last word if there's one left
if (word) output.push(word);

console.log(output); // Output: ['bake', 'cake', 'eat']

let employeesi_ = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

let departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" }
];

// Merge department info into employees
let updatedEmployees = employeesi_.map(emp => ({
  ...emp,
  dept: departments.find(dept => dept.eId === emp.eId)?.dept || "N/A" // Add dept or "N/A" if not found
}));

console.log(updatedEmployees);


// Group by name
let groupedEmployees = employees.reduce((acc, emp) => {
  acc[emp.name] = acc[emp.name] || []; // If name doesn't exist, create an empty array
  acc[emp.name].push(emp); // Push employee object into the array
  return acc;
}, {});
console.log(groupedEmployees);

function getIntersection(arr1, arr2) {
  let set2 = new Set(arr2); // Convert second array to a Set for quick lookup
  return arr1.filter(num => set2.has(num)); // Keep only numbers that exist in set2
}

// intesrsection
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let intersection = getIntersection(arr1, arr2);
console.log(intersection); // Output: [3, 4, 5]


function countOccurrences(arr) {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // Increment count or initialize to 1
    return acc;
  }, {});
}

//10. occurences of each elements
let input = [10, 20, 30, 40, 50, 10, 30, 50];

let output1 = countOccurrences(input);
console.log(output1);