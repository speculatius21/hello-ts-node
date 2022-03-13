import {Observable} from 'rxjs';

const obs$ = new Observable(subscriber => {
    subscriber.next("Hello,");
    subscriber.next("My name is...");
    subscriber.next("Linus :)");
    subscriber.complete();
});

obs$.subscribe({
    next: x => {
        // tslint:disable-next-line:no-console
        console.log('NEXT:', x);
    },
    error: err => {
        // tslint:disable-next-line:no-console
        console.log("ERROR : ", err);
    },
    complete: () => {
        // tslint:disable-next-line:no-console
        console.log("DONE");
    }
});
