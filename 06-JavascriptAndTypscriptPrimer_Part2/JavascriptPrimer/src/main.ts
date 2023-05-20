import { Name, Weather } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicatedName";
import { TempConverter } from "./modules/TempConverter";

let name = new Name("Adam", "Smith");
let weather = new Weather("sunny", "London");

let otherName = new OtherName();

let tuple: [string, string, string];

tuple = ["London", "raining", TempConverter.convertFtoC(150)];

console.log(name.message);
console.log(weather.message);
console.log(otherName.message);

console.log(TempConverter.convertFtoC(38));
console.log(TempConverter.convertFtoC("100"));

console.log(`It is ${tuple[2]} degrees C and it is ${tuple[1]} in ${tuple[0]}`);
