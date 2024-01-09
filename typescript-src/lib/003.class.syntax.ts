class Person {
  static sayHi(){
    console.log('Hi')
  }
  private _name: string;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  // durch Sichtbarkeit von Übergabeparameter automatisch als property erkannt
  constructor(name: string, private age: number) {
    this._name = name;

    console.log('Constructor Person:', this);
  }

  sayHi() {
    console.log(this._name, 'sagt Hi');
  }
}

const person = new Person('Em', 22);
person.sayHi();

Person.sayHi()
