"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var obs$ = rxjs_1.of('adam', 'ben', 'cedric');
obs$
    .pipe(operators_1.count(function (e) { return e.indexOf("e") > 0; }))
    .subscribe(function (e) {
    // tslint:disable-next-line:no-console
    console.log('returns:', e); // returns: 3
});
//# sourceMappingURL=count.js.map