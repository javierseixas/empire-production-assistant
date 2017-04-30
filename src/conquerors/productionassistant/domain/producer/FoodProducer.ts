import {Producer} from "./Producer";
import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";
import {Hamlet} from "../settlement/Hamlet";
import {Town} from "../settlement/Town";
import {Food} from "../goods/Food";
import {City} from "../settlement/City";
import {Metropolis} from "../settlement/Metropolis";

export class FoodProducer implements Producer {

    produce(settlement: Settlement): Goods {
        if (settlement instanceof Hamlet) {
            return new Food(1)
        }

        if (settlement instanceof Town) {
            return new Food(2);
        }

        if (settlement instanceof City) {
            return new Food(-1);
        }

        if (settlement instanceof Metropolis) {
            return new Food(-2);
        }

        return new Food(-3);
    }
}
