// Callback function

function myDisplayer(someText){
  document.getElementById('val').innerHTML = someText;
}

function add(num,num1, callback){
  let result = num + num1;
  callback(result)
}

add(5,5, myDisplayer);

// Asynchronous function
setTimeout( function(){
  document.getElementById('val2').innerHTML = 'Holaaa';
}, 2000);

setTimeout(function(){
  myfunction('Como estas!');
},3000);

function myfunction(value){
  document.getElementById('val3').innerHTML = value;
};

setInterval(() => {
  let d = new Date();
  document.getElementById('val4').innerHTML = `${d.getHours()}hours: ${d.getMinutes()}minutes: ${d.getSeconds()}seconds`;
}, 4000);

//Promises

let promise = new Promise(function(myResolve,myReject){
  // the producing code (it may take some time to load)
  myResolve(); // when successful
  myReject(); // when error
});

function  display(some){
  document.getElementById('val5').innerHTML = some;
}

let myPromise = new Promise(function(resolve,reject){
  let x = 67;

  if (x === 0){
    resolve('ok');
  }else{
    reject('Error')
  }
});

myPromise.then(
  function(response){display(response);},
  function(error){display(error);}
)
//Async and Await

async function myDisplay1() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("I love You !!");
  });
  document.getElementById("val6").innerHTML = await myPromise;
}

myDisplay1()