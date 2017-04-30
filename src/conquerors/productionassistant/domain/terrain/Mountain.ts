import {Terrain} from "./Terrain";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {Producer} from "../producer/Producer";
import {StoneProducer} from "../producer/StoneProducer";

export class Mountain implements Terrain {

    readonly producer: Producer = new StoneProducer;

    produce(settlement: Settlement): Goods {
        return this.producer.produce(settlement);
    }
}
