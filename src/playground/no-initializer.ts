class Consultant1 {
    id!: string;
}
// tslint:disable-next-line:max-classes-per-file
class Consultant2 {
    constructor(id: string) {
        this.id = id;
    }

    id: string;
}
const myFunction = (id: string): Consultant2 => ({id});

// tslint:disable-next-line:no-console
console.log(myFunction('4711'));
