"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.of('Hello', 'Hi', 'Bonjour'); // <---------- emits these values: 'Hello', 'Peter', 'Paul'
var hotPromise = function (e) {
    return Promise.resolve(e + " World From Promise!");
};
// new Promise(
//    resolve => resolve(`${e} World From Promise!`) // <---- Promise-object
// );
// map to promise and emit result
source$
    .pipe(operators_1.mergeMap(
// map(
function (e) { return hotPromise(e); } // <-------- hier ist die inner subscription
))
    .subscribe(
// tslint:disable-next-line:no-console
function (e) { return console.log(e); } // <---- returns: 'Hello World From Promise'
);
//# sourceMappingURL=mergeMap.js.map