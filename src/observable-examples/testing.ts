import {interval, takeUntil, timer} from "rxjs";


//  const obs$ = of('a', 'b','c', 'd');
const timer$ = timer(3000);
const obs$ = interval(500).pipe(takeUntil(timer$));

// tslint:disable-next-line:no-console
obs$.subscribe( e => console.log('1st subscriber:', e) );
// tslint:disable-next-line:no-console
obs$.subscribe( e => console.log('2nd subscriber:', e) );
