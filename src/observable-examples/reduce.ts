import {from} from 'rxjs';
import {reduce} from "rxjs/operators";

const artists2 = [
    {name: 'Nick Cave', albums: [{title: 'Push the Sky Away'}, {title: 'No more shall we part'}]},
    {name: 'Ben Harper', albums: [{title: 'Live from Mars'}, {title: 'The Will to Live'}]},
];

const source$ = from(artists2);

source$
    .pipe(
        reduce((acc, e) => {
            return acc + e.albums.length;
        }, 0)
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        e => console.log(e)
    );

