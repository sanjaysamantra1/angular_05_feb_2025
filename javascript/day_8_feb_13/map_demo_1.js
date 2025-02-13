let userMap = new Map();

userMap.set('name', 'Ramana');
userMap.set('age', 28);
userMap.set('add', 'harrisburg');
console.log(userMap)
console.log(userMap.size)

console.log(userMap.get('name')); // read 1 value
userMap.delete('age'); // delete 1 prop
console.log(userMap)
userMap.clear();
console.log(userMap)
