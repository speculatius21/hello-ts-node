interface FlightSeating {
    [index: string]: string;
}

let flightSeating: FlightSeating;
flightSeating = {
    '34d': 'passenger-1',
    '04e': 'passenger-2'
}

console.log(flightSeating);

