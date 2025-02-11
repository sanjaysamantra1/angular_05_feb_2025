console.log(`a value is ${a}`);  // undefined
var a = 10;
console.log(`a value is ${a}`); // 10

function test() {
    console.log(`a value is ${a}`);  // undefined 
    var a = 20;
    
    console.log(`a value is ${a}`); // 
}
test();


let f= function(){
    console.log("f is invoked");
    console.log(this);
}
f();

let user= {
    FirstName: "John",
    LastName: "Doe",
    getFullName: function(){
        console.log(this);
        console.log(this.FirstName + " " + this.LastName);
    }
}
user.getFullName();