// Primitive VS Reference Type

//Primitive

let name = "Mahmud";
let age = 27;
let flag = true;
let unde = undefined;
let nu = null;

//Reference

let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr;
arr1[0] = 2;
console.log(arr[0]);

let person = {
  name: "Mahmud",
  age: 27,
};

let newPerson = person;
newPerson.name = "Hasan";
console.log(person.name);

//Type Conversion

//String to Number

let amount = "100.99";
// amount = parseInt(amount);
amount = Number(amount);
// amount = +amount;
console.log(amount, typeof amount);

//Number to String

amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount);

//Number to Boolean

amount = Boolean(amount);
console.log(amount, typeof amount);

//Operators

//1. Arithmatic Operator -> +, -, * , /, %

let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5;

//2. Concatenation -> +

x = "Hello" + " " + "World";

//3. Exponent -> **

x = 2 ** 3;

//4. Increament

x++;

//5. Decreament

x--;

//6. Assignment Operator

x = 5;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

//7. Comparison Operators

x = 2 == 2;
x = 3 == "3";
x = 3 === "3";

x = 2 != 2;
x = 3 != "3";
x = 3 !== "3";
console.log(x);

//8. Greater Then and Less Then

x = 2 > 1;

console.log(x);

//String

const s = "Hello";
x = s.__proto__;
x = s.substring(1);
x = s.slice(-6, -1);
x = s.trim();
x = s.replace("ello", "i");
x = s.includes("i");
x = s.split("");
console.log(x);

//Challange 1 :
/*
Create a 'myString' variable and initialize that with 'developer' and create another variable named 'myNewString' which will output 'Developer' using 'myString'
*/

const myString = "developer";
const myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

//Number

const n = 5;

x = n.__proto__;

console.log(x);

console.log(Math);

//Challenge 2 :
/*
    Create a variable x that holds random number between 1 and 100 along with a variable y holds a random number between 1 and 50.
    Create variables Sum, Difference, Product , Quotient and Remainder of x and y along with operator and result.
*/

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 50 + 1);

const sumOutput = n1 + n2;
const diffOutput = n1 - n2;
const multiOutput = n1 * n2;
const quiOutput = n1 / n2;
const rmOutput = n1 % n2;

console.log(`${n1} + ${n2} = ${sumOutput}`);
console.log(`${n1} - ${n2} = ${diffOutput}`);
console.log(`${n1} * ${n2} = ${multiOutput}`);
console.log(`${n1} / ${n2} = ${quiOutput}`);
console.log(`${n1} % ${n2} = ${rmOutput}`);

//Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7];
const fruits = new Array("Apple", "Grape", "Orange");
const mixed = [12, "Lemon", true];
console.log(numbers);
console.log(fruits);

x = numbers[0] + numbers[3];
x = `My favorite fruit is ${fruits[2]}`;
x = mixed.length;

x = numbers.__proto__;
numbers.push(8);
numbers.pop();
numbers.unshift(0);
numbers.shift();

x = numbers.includes(3);
x = numbers.indexOf(3);
x = numbers.slice(2, 5);
x = numbers.splice(2, 3);
x = numbers.slice(1, 4).reverse().toString();
x = console.log(x, numbers);

//Nesting Array

const fruitBusket = ["Apple", "Pear", "Orange"];
const fruitBusket1 = ["Blueberry", "Pineapple", "Guava"];
// fruitBusket.push(fruitBusket1);
// x = fruitBusket[3][0];
const allFruits = [fruitBusket, fruitBusket1];
// x = allFruits;
x = [...fruitBusket, ...fruitBusket1];
x = fruitBusket.concat(fruitBusket1);
console.log(x);

//Flatten Arrays

const flatArr = [1, 2, [3, 4], 5, 6, [7, 8], 9];
x = flatArr.flat();
console.log(x);

//Static Method on Array Object

x = Array.isArray("Hello");
x = Array.from("12345");
const a = 1;
const b = "2";
const c = 3;
x = Array.of(a, b, c);
console.log(x);

//Array Challenge

/*
Given array [1,2,3,4,5] -> Output as [6,5,4,3,2,1,0]
*/

const chArr = [1, 2, 3, 4, 5];
chArr.reverse();
chArr.push(0);
chArr.unshift(6);
console.log(chArr);

const chArr1 = [1, 2, 3, 4, 5];
const chArr2 = [5, 6, 7, 8, 9, 10];

x = chArr1.concat(chArr2.slice(1));
console.log(x);

//Object Literal

const obj = {
  name: "Mahmud",
  age: 27,
  isAdmin: true,
  address: {
    road: "1/D",
    house: 31,
    flat: "5B",
  },
  hobbies: ["Drawing", "Poetry", "Reading"],
  // greet: function () {
  //   console.log(`Hello, my name is ${this.name}`);
  // },
};

x = obj.name;
x = obj["isAdmin"];
x = obj["address"]["house"];

delete obj.hobbies;
obj.hasChildren = true;
obj.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
obj.greet();

x = obj;

console.log(x);

const anotherObj = {
  "first name": "Mahmudul",
  "last name": "Hasan",
};

console.log(anotherObj["first name"]);
