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
console.log(TempConverter.convertFtoC("100"));

let tuple: [string, string, string];

tuple = ["London", "raining", TempConverter.convertFtoC(150)];
console.log(`It is ${tuple[2]} degrees C and it is ${tuple[1]} in ${tuple[0]}`);

let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TempConverter.convertFtoC(38)];
cities["Paris"] = ["sunny", TempConverter.convertFtoC(52)];
cities["Brasil"] = ["snowing", TempConverter.convertFtoC(138)];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]} - ${cities[key][1]}`);
}
