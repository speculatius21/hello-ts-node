import {interval} from 'rxjs';

interval(2000) // <----------- emits a number after every 2 seconds
    .subscribe(
        nextValue => console.log(nextValue)
    );
