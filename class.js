class Car {
  constructor(name,year) {
    this.name =name;
    this.year = year;
  }
}

let myCar = new Car('Mercedez',2018);
let myCar2 = new Car('tesla',2020)

Object.defineProperty(myCar,'age',{
 get : function(){ var date = new Date();
  return date.getFullYear() - this.year}
})

console.log(myCar.age)
document.getElementById('car').innerHTML = myCar.age;

// Class inheritance
 
class CarBrand{
  constructor(brand){
    this.carname = brand;
  }
  present (){
    return `I have a ${this.carname}`
  }
  get cName(){ // getting the carname using getter
    return this.carname;
  }
  set cName(x){ // u can reset the carname using the setter method
    this.carname = x;
  }
}

class Model extends CarBrand {
  constructor(brand,mod){
    super(brand);
    this.model = mod;
  }
  show (){
    return this.present() + ', It is a ' + this.model;
  }
}

let myCarModel = new Model('mercedes', 'C class');
document.getElementById('new').innerHTML = myCarModel.show();

//using the getter to get the carname
myCar3 =  new CarBrand('honda');
document.getElementById('new2').innerHTML = myCar3.cName;

//using the setter to set the carname
myCar3.cName = 'Toyota Hilux';
document.getElementById('new3').innerHTML = myCar3.cName;

//Static Methods

class Carr {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCarr = new Carr("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById('new4').innerHTML = Carr.hello();

// But NOT on a Car Object:
// document.getElementById("new4").innerHTML = myCar.hello();
// this will raise an error.

class Caar {
  constructor(name) {
    this.carname = name;
  }
  static helllo(x) {
    return "Hello " + x.name;
  }
}
let myCaar = new Caar("Ford");
document.getElementById("new5").innerHTML = Caar.helllo(myCar);