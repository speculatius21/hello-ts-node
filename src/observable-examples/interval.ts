import {interval} from 'rxjs';
import {takeWhile, filter} from 'rxjs/operators';

const source$ = interval(500); // <----------- emits a number after every 500ms
source$
    .pipe(
        filter(e => 3 < e && e < 8)
    ).subscribe(
    // tslint:disable-next-line:no-console
    nextValue => console.log('subscriber 1:', nextValue)
);
source$
    .pipe(
        takeWhile(e => e < 5)
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        nextValue => console.log('subscriber 2:', nextValue)
    );
