class Foo2 {
    private _bar: boolean = false;

    get bar() {
        return this._bar;
    }

    set bar(bar: boolean) {
        this._bar = bar;
    }
}

let foo2 = new Foo2();
// tslint:disable-next-line:no-console
console.log(foo2.bar); // returns: false

foo2.bar = true;
// tslint:disable-next-line:no-console
console.log(foo2.bar); // returns: true

