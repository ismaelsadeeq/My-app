var person = {
  name:'Ibrahim',
  surname:'muhammed',
  age:'20',
  eyecolor:'brown'
};

var person2 = new Object();
person2.firstName = "Musa";
person2.lastName = "Abubakar";
person2.age = 30;
person2.eyeColor = "blue"; 

document.getElementById("name").innerHTML= person2.firstName + " is " + person2.age + " years old.";
//mutability

var x = person;
x.age = 10; // this will change the values of both x.age and person.age

console.log( `my name is ${person.name} my surname is ${person.surname}`); // tgetting things from an object

console.log( `my name is ${person['name']} I am ${person['age']}`);

// for in... in class
var txt = "";
var person3 = {fname:"zainab", lname:"ismail", age:25}; 
var x;
for (x in person3) {
  txt += person3[x] + " ";
}
document.getElementById("age").innerHTML = txt;

person3.nationality ='Nigeria'
console.log(person3['nationality'])


// method

person3.fullname = function (){
  return `${this.fname} ${this.lname}`
}
document.getElementById('method').innerHTML = person3.fullname();

//my method

var sumOf = new Object();
sumOf.TwoNumbers = (a,b) => {
  return a+b;
} 

console.log(sumOf.TwoNumbers(5,10));

// displaying objects in JS

document.getElementById('display').innerHTML = person3 //  it will display object object

var text= "";
var x;

for(x in person){
  text+= person[x] + ' ';
}
document.getElementById('display').innerHTML = text // You will get each value of every property

myArray = Object.values(person2)
document.getElementById('display1').innerHTML = myArray// You will get each value of every property


myString = JSON.stringify(person3);
document.getElementById('display2').innerHTML = myString // You will get each value of every property

// stringifying Dates

// person3['today'] = new Date();
myString = JSON.stringify(person3); 

// stringifying Functions

person3.fullname = person3.fullname.toString();
myString2 = JSON.stringify(person3);
document.getElementById('display3').innerHTML = myString2 // You will get each value of every property

// Stringifying an array

arr = [1,2,3,4,'Hello']
arr = JSON.stringify(arr);
document.getElementById('display4').innerHTML = arr // You will get each value of every property

//Accessors getters and setters

person4 = {
  name:'Sadeeq',
  hobby:'coding',
  language:'fulani',
  get lang(){
    return this.language;
  },
  set lang(lang){
    this.language = lang;
  }
};

document.getElementById('get').innerHTML =person4.lang;

person4.lang = 'English';
document.getElementById('set').innerHTML = person4.lang;

//Data Quality

Object.defineProperty(person4,'lang_to_upper',{ //
  get: function(lang){
   return this.language.toUpperCase();
  }
})
document.getElementById('get-upper').innerHTML =person4.lang_to_upper;

//Object.defineProperty();
var obj = {
  counter:0
};
// define setters

Object.defineProperty(obj, 'reset',{
  get : function () {this.counter = 0}
});
Object.defineProperty(obj,'increment',{
  get : function () {this.counter++}
});
Object.defineProperty(obj,'decrement',{
  get : function () {this.counter--}
});
Object.defineProperty(obj,'add',{
  set: function (value) {this.counter+=value}
});
Object.defineProperty(obj,'subtract',{
  set: function (value) {this.counter-=value}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

//Object Constructors

function Person4(fname, lname, age, eyecolor){
  this.fname = fname,
  this.lname = lname,
  this.age = age,
  this.eyecolor = eyecolor
  this.changeName = function (name){
    this.lname = name;
  }
};

let dad = new Person4('ismail','abubakar',60,'black')
dad.changeName('buba');

document.getElementById('cons').innerHTML =dad.lname;
