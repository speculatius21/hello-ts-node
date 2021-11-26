import {from} from 'rxjs';
import {map, filter, scan} from "rxjs/operators";

from([1, 2, 3, 4, 5])
    .pipe(
        map(value => Math.pow(value, 2)),
        filter(value => value % 2 === 0),
        scan( (result, value) => result + value, 0 )
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        value => { console.log(value); }
    );

// Output : 1,4,9,16,25
