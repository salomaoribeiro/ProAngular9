let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.5, stock: 20 },
];

let totalValues = products
  .filter((item) => item.price > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0);

console.log("Total value: $" + totalValues.toFixed(2));

let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");

let myObject = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log("Hello " + myObject.name + ".");
    console.log("Today is " + myObject.weather + ".");
  },
};

myObject.printMessages();

class MyClass {
  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }

  set weather(value) {
    this._weather = value;
  }

  get weather() {
    return `Today is ${this._weather}`;
  }

  printMessages() {
    console.log("Hello " + this.name + ".");
    console.log(myClass.weather);
  }
}

let myClass = new MyClass("Jacqui", "raining");
myClass.printMessages();
