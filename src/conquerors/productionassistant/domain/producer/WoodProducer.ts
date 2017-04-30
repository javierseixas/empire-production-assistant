import {Producer} from "./Producer";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {Hamlet} from "../settlement/Hamlet";
import {Wood} from "../goods/Wood";
import {Town} from "../settlement/Town";

export class WoodProducer implements Producer {

    produce(settlement: Settlement): Goods {
        if (settlement instanceof Hamlet) {
            return new Wood(1)
        }

        if (settlement instanceof Town) {
            return new Wood(2);
        }

        return new Wood(0);
    }
}
