import {Subject} from 'rx';

export class RxEventBus {

    protected subject : Subject<RxEvent>;

    constructor() {
        this.subject = new Subject<RxEvent>();
    }

    subscribe(key, action) {
        console.log("subscribing");
        return this.subject
            .filter(event => event.key === key)
            .map(event => event.value)
            .subscribe(action);
    }

    post(event) {
        console.log("posting")
        this.subject.onNext(event);
    }

}

export const Pepe = new RxEventBus();

export class RxEvent {

    // FIXME make properties protected
    public key : any;
    public value : any;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

}
