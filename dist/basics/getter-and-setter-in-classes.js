var Foo2 = /** @class */ (function () {
    function Foo2() {
        this._bar = false;
    }
    Object.defineProperty(Foo2.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (bar) {
            this._bar = bar;
        },
        enumerable: false,
        configurable: true
    });
    return Foo2;
}());
var foo2 = new Foo2();
// tslint:disable-next-line:no-console
console.log(foo2.bar); // returns: false
foo2.bar = true;
// tslint:disable-next-line:no-console
console.log(foo2.bar); // returns: true
//# sourceMappingURL=getter-and-setter-in-classes.js.map