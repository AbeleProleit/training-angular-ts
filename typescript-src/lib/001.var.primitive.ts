let age: number = 32;
console.log('Age', age);

let ages: number[] = [32, 42, 16];
console.log('Ages', ages);

function changeAge(age: number | number[]): void {
  if (typeof age === 'number') {
    age += 1; // wert bleibt unverändert, da immutable weil primitiv (es wird eine neue Objekt Referenz erzeugt)
  } else {
    age[0] += 1; // array als referenzdatentyp -> hier wird original verändert
    const ages = [...age]; // so kann referenztyp verändert werden ohne original Daten zu verändern
    ages[0] += 1;
  }
}

changeAge(age);
console.log('Age', age);
changeAge(ages);
console.log('Ages', ages);

// isFrozen: immutable
console.log(Object.isFrozen(1))
console.log(Object.isFrozen('str'))
console.log(Object.isFrozen(false))


console.log(Object.isFrozen(ages)) // -> false, nicht immutable. kann deswegen auch bei const Objekten "enthaltene" Werte ändern


console.log('age', Object.isSealed(age))
console.log('age', Object.isExtensible(age))

console.log('ages', Object.isSealed(ages))
console.log('ages', Object.isExtensible(ages))

export default {};
