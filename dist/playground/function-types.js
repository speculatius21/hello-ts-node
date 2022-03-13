// function add(a:number, b:number) {
//     return a + b;
// }
// tslint:disable-next-line:only-arrow-functions
// let add = (a: number, b: number) => { return a + b; };
// tslint:disable-next-line:only-arrow-functions
var add = function (a, b) { return a + b; };
// let add = new Function('a', 'b', 'return a+b');
// tslint:disable-next-line:no-console
console.log(add(4, 5)); // returns: 9
// tslint:disable-next-line:no-console
console.log(add); // returns: [Function: add]
//# sourceMappingURL=function-types.js.map