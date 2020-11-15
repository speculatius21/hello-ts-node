// function add(a:number, b:number) {
//     return a + b;
// }

// tslint:disable-next-line:only-arrow-functions
let add = (a: number, b: number) => a + b;
// let add = new Function('a', 'b', 'return a+b');

console.log(add(4, 5)); // returns: 9
console.log(add);       // returns: [Function: anonymous]
