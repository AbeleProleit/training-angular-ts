let age: number = 42;
let id: number | string = 42; // >1 mögliche Typen für Variable

id = '42';

let list: any[] = []; // aua -> any deaktiviert jegliche typ Validierung

let list1: (string | number | boolean)[] = ['asdf', 42, false]; // liste kann kombiniert alle Typen enthalten
let list2: Array<string | number>; // liste aus allen angegebenen Typen
let list3: string[] | number[]; // entweder liste aus strings liste aus numbers

let colors: 'red' | 'green' | 'blue' = 'blue'; // "kleine" Enums -> für code completion ganz nett

//Objekte: viel manuell schreiben
let obj1: { x: number; y: number; name?: string } = { x: 0, y: 0 };
obj1.name = 'toller name';

let obj2: { x: number; y: number; name?: string } = {
  x: 0,
  y: 0,
  name: 'center',
};

// Erleichterung durch interfaces

interface Person {
  name: string;
  age: number;
}

interface Position {
  x: number;
  y: number;
  name?: string;
}

let position: Position = { x: 1, y: 2, name: 'toller ort' };

interface Human {
  name: string;
  age: number;
  sayHello: () => void; // ich erwarte eine Funktion ohne return wert
}

const sam:Human = {
  name: 'sam',
  age: 32,
  sayHello: function() {console.log('helom', this)}
}
sam.sayHello()

// ENUM
enum Color{red, green, blue}
let col = Color.red

// Any
let notSure: any = 4
notSure = 'asdf';
notSure = false;

// never, unknown -> siehe bei functions

export default {};
