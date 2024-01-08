const numbers: number[] = [1, 2, 3]; // default

const numbers2: Array<number> = [3, 4, 5];
numbers.push(4);
// ... spread operator
const numbers4 = [...numbers, 91, ...numbers2]; // konkateniert arrays

console.log(numbers4);

// Tupel
let address: [string, number] = ['hauptstr.', 21];

export default {};
