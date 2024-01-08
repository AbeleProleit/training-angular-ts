// function mit opt. Params
function add(a: number, b: number, c?: number): number {
  if (!c) c = 0; // ist c undefined?
  return a + b + c;
}

function add_2(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0); // wenn undefined, dann 0
}

function add_3(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// default wert für parameter
function addDefault(a: number, b: number, c: number = 0): number {
  return a + b + c;
}

// default mit restliste

function addRest(a: number, b: number, ...rest: number[]): number {
  let sum = 0;
  rest.forEach((x) => (sum += x));
  return a + b + sum;
}

// named params über Umweg

function addNamedParams(
  a: number,
  b: number,
  { c = 0, d = 0 }: { c?: number; d?: number } = {}
): number {
  return a + b + c + d;
}

addNamedParams(1, 2, { d: 3 });

// Tupel parameter

function addTupel(a: number, b: number, [c, d]: [number, number]): number {
  return a + b + c + d;
}

export default {};
