"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// emits every second
var ones$ = rxjs_1.interval(1000);
// emit every 2 seconds
var twos$ = rxjs_1.interval(2000);
rxjs_1.merge(// <-------- the merge-operator joins two or more observables into one observable
ones$.pipe(operators_1.mapTo("Ones")), // <---- pipe() is used to attach operators to observables
twos$.pipe(operators_1.mapTo("Twos"))
// tslint:disable-next-line:no-console
).subscribe(function (val) { return console.log(val); });
// Output : "Ones", "Twos", "Ones, "Ones", "Twos", "Ones", "Ones"...
//# sourceMappingURL=merge.js.map