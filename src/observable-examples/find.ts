import {of} from 'rxjs';
import {find} from 'rxjs/operators';

const source$ = of(
    {name: 'Nokia', price: 250},
    {name: 'iPhone', price: 999},
    {name: 'Redmi', price: 350},
    {name: 'Motorola', price: 350}
);

source$
    .pipe(
        find(e => e.price === 350) // <----- Prädikat-Funktion bestimmt, was gefunden werden soll
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        e => console.log(e),
        err => console.error(err),
        // tslint:disable-next-line:no-console
        () => console.log('completed.')
    );

// returns:
// { name: 'Redme', price: 350 }
// completed.
