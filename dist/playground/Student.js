var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.printNumbers = function () {
        var _loop_1 = function (i) {
            setTimeout(function () { console.log(i); }, 1000);
        };
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "lastname");
console.log(user);
user.printNumbers();
//# sourceMappingURL=Student.js.map