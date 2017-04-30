import {Goods} from "../goods/Goods";
import {Terrain} from "../terrain/Terrain";

export abstract class Settlement {

    protected settlerDisposed : boolean = false;

    constructor(readonly terrain : Terrain) {
        this.terrain = terrain;
    }

    // TODO emit event settlementUpgraded (Study if implements here or in each instance
    abstract upgrade(): Settlement;

    abstract taxes(): Goods

    disposeSettler(): void {

        if (this.settlerDisposed) {
            throw Error("A settler has been already disposed in this settlemen");
        }

        // TODO emit event settlerDisposed -1 Food

        this.settlerDisposed = true
    }

    production() : Goods {
        return this.terrain.produce(this)
    }

}