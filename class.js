class car {
  constructor(name,year) {
    this.name =name;
    this.year = year;
  }
}

let myCar = new car('Mercedez',2018);
let myCar2 = new car('tesla',2020)

Object.defineProperty(myCar,'age',function(){
  return 2020 - this.year;
})

console.log(myCar.age())

