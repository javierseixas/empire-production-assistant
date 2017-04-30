import {Goods} from "../goods/Goods";
import {Terrain} from "../terrain/Terrain";

export abstract class Settlement {

    protected settlerDisposed : boolean = false;

    constructor(readonly terrain : Terrain) {
        this.terrain = terrain;
    }

    abstract upgrade(): Settlement;
    abstract taxes(): Goods

    disposeSettler(): void {

        if (this.settlerDisposed) {
            console.log("A settler has been already disposed in this settlement");
            return;
        }

        // TODO rest from the reserve

        this.settlerDisposed = true
    }

    production() : Goods {
        return this.terrain.produce(this)
    }

}