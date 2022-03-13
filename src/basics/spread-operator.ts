// Funktion mit drei Parametern
const sumFunction = (x, y, z) => x + y + z;

const parameterArray = [1, 2, 3];
const result = sumFunction.apply(null, parameterArray); // <--- Übergabe der 3 Parameterwerte als Array
// tslint:disable-next-line:max-line-length no-console
console.log(result);

// ---

// A spread argument must either have a tuple type or be passed to a rest parameter
const parameterArray2 = [1, 2, 3] as const;
const result2 = sumFunction(...parameterArray2); // <--- Spread-Syntax macht aus einem Array einzelne Werte
// tslint:disable-next-line:max-line-length no-console
console.log(result2);
