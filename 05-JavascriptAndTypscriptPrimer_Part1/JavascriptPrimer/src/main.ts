//import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';

//if (environment.production) {
//  enableProdMode();
//}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

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
