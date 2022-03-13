"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//  const obs$ = of('a', 'b','c', 'd');
var timer$ = rxjs_1.timer(3000);
var obs$ = rxjs_1.interval(500).pipe(rxjs_1.takeUntil(timer$));
// tslint:disable-next-line:no-console
obs$.subscribe(function (e) { return console.log('1st subscriber:', e); });
// tslint:disable-next-line:no-console
obs$.subscribe(function (e) { return console.log('2nd subscriber:', e); });
//# sourceMappingURL=testing.js.map