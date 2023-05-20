export class Name {
  constructor(private first: string, private second: string) {}

  get message(): string {
    return `Hello ${this.first} ${this.second}`;
  }
}

export class Weather {
  constructor(private weather: string, private city: string) {}

  get message(): string {
    return `It is ${this.weather} in ${this.city}`;
  }
}
