// Custom error types
class InvalidDateFormatError extends RangeError {
}

// tslint:disable-next-line:max-classes-per-file
class DateIsInTheFutureError extends RangeError {
}

// tslint:disable-next-line:max-classes-per-file
class Test {

    ask(): string {
        // return prompt('When is your birthday?');
        return '07.10.1971';
    }

    parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
        const date = new Date(birthday);
        if (!this.isValid(date)) {
            throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            throw new DateIsInTheFutureError('Are you a timelord?');
        }
        return date;
    }

    isValid(date: Date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !isNaN(date.getTime());
    }

}

const test = new Test();
try {
    const date = test.parse(test.ask());
    // tslint:disable-next-line:no-console
    if (date instanceof Date) {
        // tslint:disable-next-line:no-console
        console.info('Date is', date.toISOString());
    }
} catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    } else if (e instanceof DateIsInTheFutureError) {
        // tslint:disable-next-line:no-console
        console.info(e.message);
    } else {
        throw e;
    }
}
