import {Subject} from 'rx';

class RxEventBus {

    protected subject : Subject<RxEvent>;

    constructor() {
        this.subject = new Subject<RxEvent>();
    }

    subscribe(key, action) {
        return this.subject
            .filter(event => event.key === key)
            .map(event => event.value)
            .subscribe(action);
    }

    post(event) {
        this.subject.onNext(event);
    }

}

export const rxEventBus = new RxEventBus();

export class RxEvent {

    // FIXME make properties protected
    public key : any;
    public value : any;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

}
