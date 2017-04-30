import {Settlement} from "./Settlement";
import {Goods} from "../goods/Goods";
import {Wealth} from "../goods/Wealth";

export class Metropolis extends Settlement{

    // TODO costs

    taxes(): Goods {
        return new Wealth(3);
    }

    upgrade() : Settlement {
        throw Error("Metropolis cannot be upgraded");
    }
}