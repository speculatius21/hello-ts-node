class Foo {
    private _booleanProperty: boolean = false;
    private _stringProperty: string = "";

    get stringProperty(): string {
        return this._stringProperty;
    }

    set stringProperty(value: string) {
        this._stringProperty = value;
    }

    get booleanProperty() {
        return this._booleanProperty;
    }

    set booleanProperty(newBar) {
        this._booleanProperty = newBar;
    }
}

const foo = new Foo();

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
