var ExceptionHandling = /** @class */ (function () {
    function ExceptionHandling(firstName) {
        this.firstName = firstName;
        this.lastName = 'Doe';
    }
    ExceptionHandling.prototype.printNumbers = function () {
        var _loop_1 = function (i) {
            setTimeout(function () { console.log(i); }, 1000);
        };
        for (var i = 1; i <= 10; i++) {
            _loop_1(i);
        }
        try {
            throw 'Oh no!';
        }
        catch (e) {
            console.log('Error message: ' + e.toString());
        }
    };
    return ExceptionHandling;
}());
var eh = new ExceptionHandling('Peter');
eh.printNumbers();
//# sourceMappingURL=ExceptionHandling.js.map