import { Name, Weather } from "./modules/NameAndWeather";

let name = new Name("Adam", "Smith");
let weather = new Weather("sunny", "London");

console.log(name.message);
console.log(weather.message);
