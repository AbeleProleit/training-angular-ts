function regularAdd(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

const sum = (a: number, b: number, c?: number): number => a + b + (c || 0);

const hochZwei: (a: number) => number = (a) => {
  return a * a;
};

// lambda ohne rückgabe
const log = (a: number, b: number): void => console.log(a + b);

// closure

const add = (base: number): ((value: number) => number) => {
  return (value: number): number => {
    return base + value;
  };
};

const addTo10 = add(10);
console.log(addTo10(5));

function getAddToBaseFunction(base: number): (value: number) => Number {
  // das gleiche ohne Lambda
  return function (value: number): number {
    return base + value;
  };
}

const addToBase10 = getAddToBaseFunction(10);
console.log(getAddToBaseFunction(10)(5));

//callback

const sumWithCallback = (
  a: number,
  b: number,
  callback: (result: number) => void
): void => {
  const result = a + b;
  callback(result);
};

sumWithCallback(1, 2, (result) => console.log('result', result));

// map using callback

const srcList = [1,2,3,4,5]
const powList = srcList.map(val => val * val)

console.log(srcList, powList)

// add mit rest
const addRest = (a:number, b:number, ... rest: number[]): number => {
  return a + b + rest.reduce((a,b) => a + b, 0);
}


export default {};
