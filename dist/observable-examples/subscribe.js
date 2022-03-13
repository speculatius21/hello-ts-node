"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obs$ = new rxjs_1.Observable(function (subscriber) {
    subscriber.next("Hello,");
    subscriber.next("My name is...");
    subscriber.next("Linus :)");
    subscriber.complete();
});
obs$.subscribe({
    next: function (x) {
        // tslint:disable-next-line:no-console
        console.log('NEXT:', x);
    },
    error: function (err) {
        // tslint:disable-next-line:no-console
        console.log("ERROR : ", err);
    },
    complete: function () {
        // tslint:disable-next-line:no-console
        console.log("DONE");
    }
});
//# sourceMappingURL=subscribe.js.map