let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
console.log('==========================');

for (ind in cars) { // es-6
    console.log(cars[ind])
}
console.log('==========================');

for (car of cars) {
    console.log(car)
}
console.log('==========================');

cars.forEach((val) => {
    console.log(val)
});