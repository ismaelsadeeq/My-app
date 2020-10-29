// Function declaration
function add(x,y){
  return x + y;
}

//Invoking a function

add(2,5);

console.log(add(2,5));

// function expresion

var x = function (a, b) {
  return a * b
};
document.getElementById("val").innerHTML = x(4, 3);

//function constructor
var myFunct = new Function("a", "b", "return a * b");

//Hoisting means  function can be called or invoked befor its declaration

myFunction(5);

function myFunction(y) {
  return y * y;
}

// self invoking functions

(function () {
  document.getElementById("self").innerHTML = "Hello! A function can call itself";
})();

//functions used as values

function myFunction2(a, b) {
  return a * b;
}

var x = myFunction2(4, 3);

document.getElementById('val2').innerHTML = x;

// functions as objects

function myFunction3(a, b) {
  return arguments.length;
}

console.log(myFunction3(4,5));

// to string method

var txt = myFunction3.toString();
document.querySelector('#val3').innerHTML = txt;

//Arrow functions

const x1 = (x, y) => x * y;


document.querySelector('#val4').innerHTML = x1(2,4);


//Functions parameters 
// you can add default parameters to a function
function devide(x,y){
  if (x || y === undefined){
    x=1;
    y=1;
  }
  return x/y;
}

document.querySelector('#val5').innerHTML = devide();

// or it can be specified this way

function devideTWoNums(a = 1,b = 1){
  return a/b;
}
console.log(devideTWoNums())
 
// Argument objects

x = findMax(1,2,44,55,6,3.6);
console.log(x);

function findMax(){
  var i;
  var max = -Infinity;
  for(i=0;i < arguments.length;i++){
    if(arguments[i]> max){
      max = arguments[i];
    }
   
  }
  return max;
}

// 
function sumNumbers(){
  var i;
  var sum =0;
  for(i=0;i < arguments.length; i++){
   sum +=  arguments[i]
  }
  return sum;
}

document.getElementById('val6').innerHTML = sumNumbers(1,2,3,4);
// function call
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"joseph",
  lastName: "Adams"
}
var person2 = {
  firstName:"Suwaiba",
  lastName: "Ismail"
}
var x3 = person.fullName.call(person1); 
document.getElementById("val7").innerHTML = x3; 

var x4 = person.fullName.call(person2)
console.log(x4);

//functions Apply 

x5 =person.fullName.apply(person1);
console.log(x5);

var person2 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person3 = {
  firstName:"muhammad",
  lastName: "Ahmad"
}
x6 = person2.fullName.apply(person3, ["Oslo", "Norway"]);

console.log(x6);


// using the math.math method 
// you can apply it in an array
arr = [5,3,5,6,44,3,2];
console.log(Math.max.apply(null,arr));

// Closures

//lifetime of a variable

var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

add();
add();
add();

console.log(counter);

function adding() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}

console.log(adding()); //this will not work

var add = (function (){
  var counter = 0;
  return function (){
    counter += 1;
    return counter;
  }
})();