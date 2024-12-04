// simple Function without return

function simple(name, email) {
  console.log(name);
  console.log(email);
}

// Function with return value

function inrToUsd(inr) {
  return inr * 80.0;
}

// Function with Default Value

function usdToInr(usd = 1000) {
  return usd / 80;
}
simple("ram", "ram@abc.com");

let response = inrToUsd(100);

response += 99;

console.log(response);

console.log(inrToUsd(200));

let inrValue1 = usdToInr(2000); // the function will be called with 2000

// since arg is not passed will be called with 1000 which is default param

let inrValue2 = usdToInr();

console.log(inrValue1);

console.log(inrValue2);

// Named Function => Annonymous function is stored with name greet
// hence its called greet(arg)

let greet = function (name) {
  return "Hello" + name + "!";
};

console.log(greet("suresh"));

// passing a function as argument to another function

function passMe() {
  return "I am passed From ";
}

function takeFunctionAsParam(funcRef) {
  console.log(funcRef);

  let resp = funcRef();
  console.log(resp);
}

takeFunctionAsParam(passMe);

// function returning a function

function returnFunction() {
  var local = "I was private"; // this local is like a private variable

  // annonymous is like a accessor method which allows other
  // methods to access that private variable

  return function () {
    // return "I am returned From Inner Function";
    return local;
  };
  //   return "Hi";
}

let funcRef = returnFunction();

console.log(funcRef());

//console.log(local)

// Self Executing Annoymous function

// module pattern
var module = (function () {
  simple("hari", "hari@abc.com");

  function one() {
    return "One";
  }
  function two() {
    return "two";
  }
  return {
    one: one,
  };
})();

console.log(module.one());



function testAge(age){

    age>18?true:false
}


function testMark(mark){
    mark>40?true:false
}