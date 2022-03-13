"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.from([1, 2, 3, 4, 5])
    .pipe(operators_1.map(function (value) { return Math.pow(value, 2); }), operators_1.filter(function (value) { return value % 2 === 0; }), operators_1.scan(function (result, value) { return result + value; }, 0))
    .subscribe(
// tslint:disable-next-line:no-console
function (value) { console.log(value); });
// Output : 1,4,9,16,25
//# sourceMappingURL=map.js.map