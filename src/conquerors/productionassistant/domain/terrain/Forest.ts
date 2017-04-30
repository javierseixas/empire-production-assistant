import {Terrain} from "./Terrain";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {WoodProducer} from "../producer/WoodProducer";
import {Producer} from "../producer/Producer";

export class Forest implements Terrain {

    readonly producer: Producer = new WoodProducer;

    produce(settlement: Settlement): Goods {
        return this.producer.produce(settlement);
    }
}
