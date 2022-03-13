"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.from([
    { name: 'Nick Cave', albums: [{ title: 'Push the Sky Away' }, { title: 'No more shall we part' }] },
    { name: 'Ben Harper', albums: [{ title: 'Live from Mars' }, { title: 'The Will to Live' }] },
]);
source$
    .pipe(operators_1.every(function (e) { return e.albums.length > 0; }) // <----- checks, if every artist has at least one album
)
    .subscribe(
// tslint:disable-next-line:no-console
function (e) { return console.log(e); } // <----------------- returns: true
);
//# sourceMappingURL=every.js.map