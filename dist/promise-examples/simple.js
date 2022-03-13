function asyncFunction() {
    return new Promise(function (resolve, reject) {
        // tslint:disable-next-line:no-console
        console.log('-> Entering asyncFunction().');
        setTimeout(function () {
            // tslint:disable-next-line:no-console
            console.log('Aufruf der asynchronen Funktion.');
            resolve('Ok');
        }, 2000);
        // tslint:disable-next-line:no-console
        console.log('<- Exiting asyncFunction().');
    });
}
asyncFunction()
    .then(function (resolve) {
    // tslint:disable-next-line:no-console
    console.log('Promise resolved:', resolve);
}, function (rejected) {
    console.error('Promise rejected', rejected);
    // throw new Error('Error22222');
})
    .catch(function (e) { return console.error('ERROR:', e.message); });
//# sourceMappingURL=simple.js.map