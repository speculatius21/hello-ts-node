import {Observable} from 'rxjs';

const obs$ = new Observable(subscriber => {
    subscriber.next("Hello,");
    subscriber.next("My name is...");
    subscriber.next("Linus :)");
    subscriber.complete();
});

obs$.subscribe({
    next: x => {
        console.log('NEXT:', x);
    },
    error: err => {
        console.log("ERROR : ", err);
    },
    complete: () => {
        console.log("DONE");
    }
});
