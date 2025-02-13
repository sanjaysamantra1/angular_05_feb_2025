function displayInfo({ name, address, age }) {
    console.log(`${name} is from ${address}, he is ${age} years old`)
}
let user = { name: 'Ramana', address: 'Harrisburg', age: 28 };
displayInfo(user);