import {from} from 'rxjs';
import {filter} from "rxjs/operators";

const artists2 = [
    {name: 'Nick Cave', albums: [{title: 'Push the Sky Away'}, {title: 'No more shall we part'}]},
    {name: 'Ben Harper', albums: [{title: 'Live from Mars'}, {title: 'The Will to Live'}]},
];

const source$ = from(artists2);

source$
    .pipe(
        filter(e => e.name.substring(0, 4) === 'Nick')
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        e => console.log(e)
    );

