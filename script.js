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

const todo = new Object();
todo.id = 1;
todo.name = "Coding";
todo.isCompleted = false;
x = todo;
console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 3 };

const obj3 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);

console.log(obj5);

const todos = [
  { id: 1, name: "buy milk" },
  { id: 2, name: "Code" },
  { id: 3, name: "Workout" },
];

x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
console.log(x);

const firstName = "Mahmudul";
const lastName = "Hasan";
const boyosh = 30;

const obj6 = {
  firstName,
  lastName,
  boyosh,
};

console.log(obj6["boyosh"]);

const obj7 = {
  todoID: 1,
  title: "Take out trash",
  user: {
    nam: "Mahmud",
  },
};

//Destructuring Obj

const {
  todoID,
  title,
  user: { nam },
} = obj7;

console.log(nam);

//Rest Operator
//Destructurting Array

const num = [1, 2, 3, 4, 5];
const [first, second, ...rest] = num;
console.log(first, second, rest);

//JSON

x = JSON.stringify(obj7);
x = JSON.parse(x);
console.log(x);

//Object Challenge

const library = [
  {
    title: "Ikigai",
    author: "Radbin Ayub",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Rich Kid, Poor Kid",
    author: "Ikramul Haque Hridoy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Kaizen",
    author: "Mahmudul Hasan",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0]["status"]["read"] = true;
library[1].status.read = true;
library[2].status["read"] = true;

console.log(library);
const { title: firstBook } = library[0];
console.log(firstBook);

//Functions

function sayHello() {
  console.log("Hello World!");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 3);

function subtract(num1, num2) {
  return num1 - num2;
}

const result = subtract(10, 2);

console.log(result);

function registerUser(user) {
  if (!user) {
    user = "Bot";
  }

  return `${user} is registered!`;
}

console.log(registerUser());

//Rest Params

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

//Object as Params

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} logged in.`;
}

const hudaUser = {
  id: 1,
  name: "Mahmud",
};

console.log(loginUser(hudaUser));

//Array as Params

function randomNumPrint(numArr) {
  const randomIDX = Math.floor(Math.random() * numArr.length);
  return numArr[randomIDX];
}

const numArr = [11, 24, 13, 45, 65, 77, 18, 29, 10];

console.warn(randomNumPrint(numArr));

// Function Declaration VS Expression
// We can call Declaration functions before initializing that but we can not call Expression function before initializing that.

//Declaration

//console.log(addDollarSign(45)); -> It will work
function addDollarSign(value) {
  return "$" + value;
}

console.log(addDollarSign(45));

//Expression

//console.log(addPlusSign(45)); -> Will give error
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(45));

//Arrow Funtion

const summation = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => a - b; // Implicit return

const double = (a) => a * a;

console.log(summation(3, 4));
console.log(subtraction(10, 4));
console.log(double(3));

//Returning an Object

const createObj = () => ({
  name: "Brad",
});

console.log(createObj());

//IIFE -> Immediately Invoked FUnction Expression

// const userName = "John"; -> Will give error because it has been already declared in otherScript.js file. So here IIFE comes in handy.

(function () {
  const user = "John";
  console.log(user);
})();

(function (name) {
  console.log("Hello " + name);
})("Mahmud");

//Function Challenge

const getCelcius = (feranhite) => ((feranhite - 32) * 5) / 9;

console.log(`The temperature is ${getCelcius(50).toFixed(0)}\xB0C`);

const minMax = (...arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});

console.log(minMax(1, 2, 3, 4, 5, 6, 7, 8));

(function (l, w) {
  console.log(
    `The area of a rectangle with a length ${l} and a width of ${w} is ${l * w}`
  );
})(5, 10);
