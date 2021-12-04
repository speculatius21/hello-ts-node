import {of} from 'rxjs';
import {count} from 'rxjs/operators';

const obs$ = of('adam', 'ben', 'cedric');

obs$
    .pipe(
        count(e => e.indexOf("e") > 0 )
    )
    .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.log('returns:', e); // returns: 3
    });
