import {from} from "rxjs";
import {every} from "rxjs/operators";

const source$ = from([
    {name: 'Nick Cave', albums: [{title: 'Push the Sky Away'}, {title: 'No more shall we part'}]},
    {name: 'Ben Harper', albums: [{title: 'Live from Mars'}, {title: 'The Will to Live'}]},
]);

source$
    .pipe(
        every(e => e.albums.length > 0) // <----- checks, if every artist has at least one album
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        e => console.log(e) // <----------------- returns: true
    );
