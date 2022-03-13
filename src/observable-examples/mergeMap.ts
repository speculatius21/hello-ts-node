import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

const source$ = of('Hello', 'Hi', 'Bonjour'); // <---------- emits these values: 'Hello', 'Peter', 'Paul'

const hotPromise = e =>
    Promise.resolve(`${e} World From Promise!`);
    // new Promise(
    //    resolve => resolve(`${e} World From Promise!`) // <---- Promise-object
    // );

// map to promise and emit result
source$
    .pipe(
        mergeMap(
        // map(
            e => hotPromise(e) // <-------- hier ist die inner subscription
        )
    )
    .subscribe(
        // tslint:disable-next-line:no-console
        e => console.log(e) // <---- returns: 'Hello World From Promise'
    );
