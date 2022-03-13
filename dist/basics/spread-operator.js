// Funktion mit drei Parametern
var sumFunction = function (x, y, z) { return x + y + z; };
var parameterArray = [1, 2, 3];
var result = sumFunction.apply(null, parameterArray); // <--- Übergabe der 3 Parameterwerte als Array
// tslint:disable-next-line:max-line-length no-console
console.log(result);
// ---
// A spread argument must either have a tuple type or be passed to a rest parameter
var parameterArray2 = [1, 2, 3];
var result2 = sumFunction.apply(void 0, parameterArray2); // <--- Spread-Syntax macht aus einem Array einzelne Werte
// tslint:disable-next-line:max-line-length no-console
console.log(result2);
//# sourceMappingURL=spread-operator.js.map