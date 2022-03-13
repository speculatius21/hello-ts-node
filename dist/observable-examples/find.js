"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.of({ name: 'Nokia', price: 250 }, { name: 'iPhone', price: 999 }, { name: 'Redmi', price: 350 }, { name: 'Motorola', price: 350 });
source$
    .pipe(operators_1.find(function (e) { return e.price === 350; }) // <----- Prädikat-Funktion bestimmt, was gefunden werden soll
)
    .subscribe(
// tslint:disable-next-line:no-console
function (e) { return console.log(e); }, function (err) { return console.error(err); }, 
// tslint:disable-next-line:no-console
function () { return console.log('completed.'); });
// returns:
// { name: 'Redme', price: 350 }
// completed.
//# sourceMappingURL=find.js.map