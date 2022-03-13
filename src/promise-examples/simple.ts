function asyncFunction() {
    return new Promise((resolve, reject) => {
        // tslint:disable-next-line:no-console
        console.log('-> Entering asyncFunction().');
        setTimeout(
            () => {
                // tslint:disable-next-line:no-console
                console.log('Aufruf der asynchronen Funktion.');
                resolve('Ok');
            }, 2000
        );
        // tslint:disable-next-line:no-console
        console.log('<- Exiting asyncFunction().');
    });
}

asyncFunction()
    .then(
        (resolve) => {
            // tslint:disable-next-line:no-console
            console.log('Promise resolved:', resolve);
        },
        (rejected) => {
            console.error('Promise rejected', rejected);
            // throw new Error('Error22222');
        }
    )
    .catch((e) => console.error('ERROR:', e.message))
    // .finally( )
;
