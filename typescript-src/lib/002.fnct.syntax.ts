// impliziter return typ
function sum_i(a: number, b: number) {
  return a + b;
}

function sum(a: number, b: number): number {
  return a + b;
}

function sum_out(a: number, b: number): void {
  console.log(sum(a, b));
}

function sum_err(a: number, b: number): never {
  // liefert nie etwas
  throw new Error();
}

function genSample<T>(arg: T): T {
  return arg;
}

const sample1 = genSample(1);
const sample2 = genSample('input');
const sample3 = genSample(false);

// unknown: Ergebnis von parse nicht bekannt
function parseJson(): unknown {
  return JSON.parse("{name:'Em'}");
}

function safeParse<T = unknown>(jsonString: string): T | null {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return null;
  }
}

interface Human {
  name: string;
  age: number;
}

const Em = safeParse("{'name':'Em', 'age':22}"); // unknown
const safeEm = safeParse<Human>("{'name':'Em', 'age':22}"); //Human oder null

const safeEmNotNull = safeParse<Human>('{"name":"Em", "age":22}')!; // kann hier sicher sagen dass kein null als Ergebnis -> !
// Fragezeichen ? bdt. wert könnte null sein
console.log('safeEmNotNull', safeEmNotNull.name);



// Typ hat parameter length (String, Array, ...)
function logLength <T extends {length:number}>(input:T):number{
  return input.length;
}



export default {};
