var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Custom error types
var InvalidDateFormatError = /** @class */ (function (_super) {
    __extends(InvalidDateFormatError, _super);
    function InvalidDateFormatError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidDateFormatError;
}(RangeError));
// tslint:disable-next-line:max-classes-per-file
var DateIsInTheFutureError = /** @class */ (function (_super) {
    __extends(DateIsInTheFutureError, _super);
    function DateIsInTheFutureError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DateIsInTheFutureError;
}(RangeError));
// tslint:disable-next-line:max-classes-per-file
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.ask = function () {
        // return prompt('When is your birthday?');
        return '07.10.1971';
    };
    Test.prototype.parse = function (birthday) {
        var date = new Date(birthday);
        if (!this.isValid(date)) {
            throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            throw new DateIsInTheFutureError('Are you a timelord?');
        }
        return date;
    };
    Test.prototype.isValid = function (date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !isNaN(date.getTime());
    };
    return Test;
}());
var test = new Test();
try {
    var date_1 = test.parse(test.ask());
    // tslint:disable-next-line:no-console
    if (date_1 instanceof Date) {
        // tslint:disable-next-line:no-console
        console.info('Date is', date_1.toISOString());
    }
}
catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    }
    else if (e instanceof DateIsInTheFutureError) {
        // tslint:disable-next-line:no-console
        console.info(e.message);
    }
    else {
        throw e;
    }
}
//# sourceMappingURL=return-error.js.map