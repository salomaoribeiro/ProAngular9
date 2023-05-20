import { Name, Weather } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicatedName";
import { TempConverter } from "./modules/TempConverter";
let name = new Name("Adam", "Smith");
let weather = new Weather("sunny", "London");

let otherName = new OtherName();

console.log(name.message);
console.log(weather.message);
console.log(otherName.message);

console.log(TempConverter.convertFtoC(38));
