"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var artists2 = [
    { name: 'Nick Cave', albums: [{ title: 'Push the Sky Away' }, { title: 'No more shall we part' }] },
    { name: 'Ben Harper', albums: [{ title: 'Live from Mars' }, { title: 'The Will to Live' }] },
];
var source$ = rxjs_1.from(artists2);
source$
    .pipe(operators_1.filter(function (e) { return e.name.substring(0, 4) === 'Nick'; }))
    .subscribe(
// tslint:disable-next-line:no-console
function (e) { return console.log(e); });
//# sourceMappingURL=filter.js.map