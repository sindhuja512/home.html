//variable declaration and intialization
//Variables

var name = "sindhu";
var age = 22;
var isMarried = false; // corrected spelling
var city = "chennai";
var state = "Tamil Nadu";

console.log(name);
console.log(age);
console.log(isMarried); // now matches the variable name
console.log(city);
console.log(state);


//Objects
var user = {
    name: "Sindhu",
    age: 22,
    Profession: "Software Engineer",
    isMarried: false,
    address: {
        city: "chennai",
        state: "Tamil Nadu",
        Country: "India",
        pincode: {
            code: 523201,
        },

    },
};


console.log(user);


user.name = "Bhargavi";
user.address.city = "Hyderbad";
delete user.isMarried;

var user = {}
user.name = "Sindhu";
user.age = 22;

console.log(user);
//Arrays
var user1 = {
    name: "Sita",
    age: 22,

}
var user2 = {
    name: "Varsha",
    age: 25,
}
var students = ["Sindhu", "Bhargavi", "Sita"];
console.log(students["2"]);
//multiple values can store in array
var students = [
    {
        name: "Ravi",
        age: 22,
        Score: 90,
    },
    {
        name: "sam",
        age: 22,
        Score: 96,
    },
    {
        name: "Hari",
        age: 56,
        Score: 100,
    }
];
console.log(students[2].name);
students[2].name = "Ramesh";
console.log(students);
//Arithmatic operators
var a = 10;
var b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Assignment operators
var a = 10;

a = a + 5;
console.log(a);
//comparision operator
var a = 10;
var b = 20;
console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);



