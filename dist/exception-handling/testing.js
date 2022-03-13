function parseDate(dateString) {
    var date = new Date(dateString);
    var time = date.getTime();
    if (isNaN(time))
        throw new RangeError('Invalid date');
    return date;
}
try {
    var date_1 = parseDate('31.12.1984');
    // tslint:disable-next-line:no-console
    console.info('Date is', date_1.toISOString());
}
catch (e) { // <--- hier wird jeder Error gefangen
    if (e instanceof RangeError) { // <--- deshalb muss man hier prüfen, welche Error man behandeln will
        console.error(e);
    }
    else {
        throw e; // <--- bei anderen Fehlern: re-throw
    }
}
//# sourceMappingURL=testing.js.map