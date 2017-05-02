import {RxEventBus} from "../RxEventBus";

export abstract class Reserve {

    protected food: number = 0;
    protected wood: number = 0;
    protected stone: number = 0;
    protected wealth: number = 0;

    constructor(readonly eventBus: RxEventBus) {
        this.eventBus.subscribe("pepe", function (event) {
            // foreach goods in event
                // resolve type
                // applies cost
            // DOUBT how to access my class
            console.log("hola");
            console.log(event);
            let hola = "hola";
            // TODO throw exception when low limit passed
        });
    }
}