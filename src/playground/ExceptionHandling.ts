class ExceptionHandling {
    lastName: string = 'Doe';

    constructor(public firstName: string) {}

    printNumbers() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(function() { console.log(i); }, 1000);
        }
        try {
            throw 'Oh no!';
        } catch(e) {
            console.log('Error message: '+e.toString());
        }
    }
}


const eh: ExceptionHandling = new ExceptionHandling('Peter');
eh.printNumbers();

