function ask() {
    // return prompt('When is your birthday?');
    return '07.10.1971';
}
function parse(birthday) {
    // tslint:disable-next-line:no-shadowed-variable
    var date = new Date(birthday || '');
    if (!isValid(date)) {
        // return null;
        throw new RangeError('Enter a date in the form dd.mm.yyyy');
    }
    return date;
}
// tslint:disable-next-line:no-shadowed-variable
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !isNaN(date.getTime());
}
var date1 = parse(ask());
if (date1) {
    console.info('Date is', date1.toISOString());
}
else {
    console.error('Error parsing date for some reason');
}
//# sourceMappingURL=return-error.js.map