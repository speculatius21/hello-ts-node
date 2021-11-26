const sumFunction = (...args) => args[0] + args[1] + args[2];
// const sumFunction = (x, y, z) => x + y + z;

const parameterArray = [1, 2, 3];
// or define as Tupel: const parameterArray: [number, number, number] = [1, 2, 3];

// tslint:disable-next-line:max-line-length
// console.log(sumFunction(...parameterArray)); // A spread argument must either have a tuple type or be passed to a rest parameter
// tslint:disable-next-line:max-line-length no-console
console.log(sumFunction.apply(null, parameterArray)); // A spread argument must either have a tuple type or be passed to a rest parameter

sumFunction(...parameterArray); // <--- macht aus einem Array einzelne Werte
sumFunction.apply(null, parameterArray);
