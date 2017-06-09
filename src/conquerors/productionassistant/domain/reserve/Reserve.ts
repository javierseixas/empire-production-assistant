import {RxEvent, RxEventBus} from "../RxEventBus";

export abstract class Reserve {

    protected food: number = 0;
    protected wood: number = 0;
    protected stone: number = 0;
    protected wealth: number = 0;

    constructor(readonly eventBus: RxEventBus) {
        debugger;
        this.eventBus.subscribe("settlerDisposed", this.updateReserve.bind(this, "settlerDisposed"));
        //this.eventBus.subscribe("settlementUpgraded", this.updateReserve.bind(this, "settlementUpgraded"));
        //this.eventBus.subscribe("armyRecruited", this.updateReserve.bind(this, "armyRecruited"));
        //this.eventBus.subscribe("settlementBuilt", this.updateReserve.bind(this, "settlementBuilt"));
    }

    public updateReserve (type : string, event : RxEvent) {

        switch (type) {
            case "settlerDisposed":
                this.settlerDisposed(event);
                break;
            case "settlementUpgraded":
                this.settlementUpgraded(event);
                break;
            case "armyRecruited":
                this.settlementUpgraded(event);
                break;
            case "settlementBuilt":
                this.settlementUpgraded(event);
                break;
            default:
                break;
        }
    }

    protected settlerDisposed(event : RxEvent) {
        console.log("settlerDisposed");
        console.log(event);
    }

    protected settlementUpgraded(event : RxEvent) {
        console.log("settlementUpgraded" + event);
    }

    protected settlementBuilt(event : RxEvent) {
        console.log("settlementBuilt" + event);
    }

    protected armyRecruited(event : RxEvent) {
        console.log("armyRecruited" + event);
    }
}
