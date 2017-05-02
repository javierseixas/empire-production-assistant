import {Goods} from "../goods/Goods";
import {Terrain} from "../terrain/Terrain";
import {RxEvent, RxEventBus} from "../RxEventBus";
import {Food} from "../goods/Food";

export abstract class Settlement {

    protected settlerDisposed : boolean = false;

    constructor(readonly terrain : Terrain, readonly eventBus : RxEventBus) {
        this.terrain = terrain;
        this.eventBus = eventBus;
    }

    // TODO emit event settlementUpgraded (Study if implements here or in each instance
    abstract upgrade(): Settlement;

    abstract taxes(): Goods

    disposeSettler(): void {

        // TODO I need to know the state of the CurrentReserve to let dispose the Settler

        if (this.settlerDisposed) {
            throw Error("A settler has been already disposed in this settlemen");
        }

        console.log("pre-disposing");
        this.eventBus.post(new RxEvent("settlerDisposed", new Food(-1)));

        this.settlerDisposed = true
    }

    production() : Goods {
        return this.terrain.produce(this)
    }

}