let msg=prompt("Hello Good morning!!!");
alert(msg);
let userInput = prompt("Enter your name:");
console.log(userInput);
alert("Hello Mr."+userInput);

let age=prompt("Enter your age:");
alert("Your age is "+age);
let newmsg=prompt("Enter your message:");
alert("Hello Mr. "+userInput+" Your age is "+age +"  "+ newmsg +" session");


let answer=prompt("Do you like working with JavaScript?");
if(answer=="no"){
    alert("You are not interested in JavaScript");
}
else if (answer=="yes"){
    alert("You are interested in JavaScript");
}
else{
    alert("You are not sure about JavaScript and cancelled the prompt");
}

function greet(name) {
    return "Hello, " + name +" You are logged into the console";
}
console.log(greet(prompt("Enter your name:")));
    
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

let car = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
        console.log("Car started!");
    }
};
car.start();
 