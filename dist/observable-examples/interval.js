"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.interval(500); // <----------- emits a number after every 500ms
source$
    .pipe(operators_1.filter(function (e) { return 3 < e && e < 8; })).subscribe(
// tslint:disable-next-line:no-console
function (nextValue) { return console.log('subscriber 1:', nextValue); });
source$
    .pipe(operators_1.takeWhile(function (e) { return e < 5; }))
    .subscribe(
// tslint:disable-next-line:no-console
function (nextValue) { return console.log('subscriber 2:', nextValue); });
//# sourceMappingURL=interval.js.map