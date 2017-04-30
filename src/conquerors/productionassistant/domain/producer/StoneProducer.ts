import {Producer} from "./Producer";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {Hamlet} from "../settlement/Hamlet";
import {Stone} from "../goods/Stone";
import {Town} from "../settlement/Town";

export class StoneProducer implements Producer {

    produce(settlement: Settlement): Goods {
        if (settlement instanceof Hamlet) {
            return new Stone(1)
        }

        if (settlement instanceof Town) {
            return new Stone(2);
        }

        return new Stone(0);
    }
}
