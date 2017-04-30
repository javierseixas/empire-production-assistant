import {Terrain} from "./Terrain";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {Producer} from "../producer/Producer";
import {FoodProducer} from "../producer/FoodProducer";

export class Landscape implements Terrain {

    readonly producer: Producer = new FoodProducer;

    produce(settlement: Settlement): Goods {
        return this.producer.produce(settlement);
    }
}
