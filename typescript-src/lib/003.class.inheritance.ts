class Animal {
  protected eyecount?: number;
  constructor(public name: string) {}
  sayHello() {
    console.log('Animal', this.name);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    this.eyecount = 2;
  }
  override sayHello(): void {
    console.log('miau', this.name);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
    this.eyecount = 2;
  }
  override sayHello(): void {
    console.log('woof', this.name);
    super.sayHello();
  }
}

const smolAnimal = new Animal('georgia');
const gato = new Cat('pyotr');

export default{};
