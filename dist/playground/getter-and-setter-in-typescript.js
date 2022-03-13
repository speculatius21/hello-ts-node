var Foo = /** @class */ (function () {
    function Foo() {
        this._booleanProperty = false;
        this._stringProperty = "";
    }
    Object.defineProperty(Foo.prototype, "stringProperty", {
        get: function () {
            return this._stringProperty;
        },
        set: function (value) {
            this._stringProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Foo.prototype, "booleanProperty", {
        get: function () {
            return this._booleanProperty;
        },
        set: function (newBar) {
            this._booleanProperty = newBar;
        },
        enumerable: false,
        configurable: true
    });
    return Foo;
}());
var foo = new Foo();
// tslint:disable-next-line:no-console
console.log(foo.booleanProperty);
// tslint:disable-next-line:no-console
console.log(foo.stringProperty);
foo.booleanProperty = true;
foo.stringProperty = "new string value";
// tslint:disable-next-line:no-console
console.log(foo.booleanProperty);
// tslint:disable-next-line:no-console
console.log(foo.stringProperty);
//# sourceMappingURL=getter-and-setter-in-typescript.js.map