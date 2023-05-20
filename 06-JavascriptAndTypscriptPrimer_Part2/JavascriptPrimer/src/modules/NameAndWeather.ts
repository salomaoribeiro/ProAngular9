export class Name {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get message() {
    return `Hello ${this.first} ${this.second}`;
  }
}

export class Weather {
  constructor(weather, city) {
    this.weather = weather;
    this.city = city;
  }

  get message() {
    return `It is ${this.weather} in ${this.city}`;
  }
}
