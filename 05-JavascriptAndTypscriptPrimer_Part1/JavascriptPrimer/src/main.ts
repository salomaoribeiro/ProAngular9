console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function (name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let index = 0; index < extraArgs.length; index++) {
    console.log("Extra Arg: " + extraArgs[index]);
  }
};

myFunc("Adam", "sunny", "one", "two", "three");

let functionWithFunc = function (nameFunction) {
  return "Hello " + nameFunction() + ".";
};

console.log(
  functionWithFunc(function () {
    return "Adam";
  })
);

let messageFunc = function (name, weather) {
  let message = "Hello, Adam";
  if (weather == "sunny") {
    let message = "It's a nice day";
    console.log(message);
  } else {
    let message = "It's " + weather + " today";
    console.log(message);
  }
  console.log(message);
};

messageFunc("Adam", "raining");

let firstString = "This is a string";
let secondString = "And so is this";

let messageFunction = function (weather) {
  let message = `It is ${weather} today.`;
  console.log(message);
};

messageFunction("raining");

let firstName = "Adam";
if (firstName == "Adam") {
  console.log("firstName is Adam");
} else if (firstName == "Jacqui") {
  console.log("firstName is Jacqui");
} else {
  console.log("firstName is neither Adam or Jacqui");
}

switch (firstName) {
  case "Adam":
    console.log("firstName is Adam");
    break;
  case "Jacqui":
    console.log("firstName is Jacqui");
    break;
  default:
    console.log("firstName is neither Adam or Jacqui");
    break;
}

let firstVal = 5;
let secondVal = "5";

if (firstVal == secondVal) {
  console.log("They are the same.");
} else {
  console.log("They are NOT the same.");
}

if (firstVal === secondVal) {
  console.log("They are the same.");
} else {
  console.log("They are NOT the same.");
}

let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

let myArray2 = [100, "Adam", true];

console.log("Index 0: " + myArray2[0]);
myArray2[0] = "Outro valor";
console.log("Index 0: " + myArray2[0]);

for (let index = 0; index < myArray2.length; index++) {
  const element = myArray2[index];
  console.log("Index: " + index + ": " + myArray2[index]);
}

console.log("---");

myArray2.forEach((value, index) =>
  console.log("Index: " + index + ": " + myArray2[index])
);
