// JavaScript object notation

var person ={
  name:'Sadeeq',
  age:19,
  city:'yola'
}

document.getElementById('val').innerHTML = person.name;


// converting objects into Json

json1 = JSON.stringify(person);

document.getElementById('val2').innerHTML = json1;
person.date = new Date();

var text = '{ "name":"Usman", "birth":"1996-11-19", "city":"yola"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("val3").innerHTML = obj.name + ", " + obj.birth;

//Or you can use the reviver method

var text2 = '{ "name":"Mark", "birth":"1986-12-14", "city":"lagos"}';
var obj2 = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

// Strings to functions
var text3 = '{ "name":"mubarak", "age":"function () {return 16;}", "city":"jalingo"}';
var obj3 = JSON.parse(text3);
obj3.age = eval("(" + obj3.age + ")");

document.getElementById("val4").innerHTML = obj3.name + ", " + obj3.age();

// Arrays can be denoted as Json too

var arr = [ "John", "Peter", "Sally", "Jane" ];

arr2 = JSON.stringify(arr);

document.getElementById('val5').innerHTML = arr2;

//stringifying Functions

myJson = JSON.stringify(obj3); // this will remove all functions

document.getElementById('val6').innerHTML = myJson;

//this can be ommited when you first convert the function to string

obj3.age = obj3.age.toString();
myJson2 = JSON.stringify(obj3);
document.getElementById('val7').innerHTML = myJson2;

//looping through Json obj
let myObj4 = { "name":"John", "age":30, "car":null };
for (x in myObj4) {
  document.getElementById("val8").innerHTML += myObj4['x'];
}