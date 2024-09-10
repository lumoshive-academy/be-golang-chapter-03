// Fungsi deklarasi
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Ekspresi fungsi
const square = function(x) {
    return x * x;
};
console.log(square(4));

// Arrow function (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Objek
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(person.firstName); // Akses properti objek


// Array
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); // Akses elemen array

