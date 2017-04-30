import {Settlement} from "./Settlement";
import {Goods} from "../goods/Goods";
import {Wealth} from "../goods/Wealth";

export class Town extends Settlement{

    // TODO costs

    taxes(): Goods {
        return new Wealth(3); // DOUBT check Wealth quantity
    }

    // TODO upgrade
    upgrade() : Settlement {
        throw Error("A castle cannot be upgraded");
    }

    disposeSettler() :void {
        throw Error("A castle cannot dispose a settler");
    }
}