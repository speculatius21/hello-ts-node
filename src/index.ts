class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    printNumbers() {
        for (let i = 1; i < 10; i++) {
            setTimeout(function() { console.log(i); }, 1000);
        }
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "lastname");

console.log(user);
user.printNumbers();
