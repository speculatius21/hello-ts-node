function ask(): string | null {
    // return prompt('When is your birthday?');
    return '07.10.1971';
}

function parse(birthday: string | null): Date | null {
    // tslint:disable-next-line:no-shadowed-variable
    const date = new Date(birthday || '');
    if(!isValid(date)) {
        return null;
    }
    return date;
}

// tslint:disable-next-line:no-shadowed-variable
function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !isNaN(date.getTime());
}

let date = parse(ask());
if (date) {
    // tslint:disable-next-line:no-console
    console.info('Date is', date.toISOString());
} else {
    console.error('Error parsing date for some reason');
}
