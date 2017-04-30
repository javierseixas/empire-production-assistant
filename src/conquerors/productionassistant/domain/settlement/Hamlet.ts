import {Settlement} from "./Settlement";
import {Town} from "./Town";
import {Goods} from "../goods/Goods";
import {Wealth} from "../goods/Wealth";

export class Hamlet extends Settlement{

    taxes(): Goods {
        return new Wealth(0);
    }

    // TODO upgrade
    upgrade() : Settlement {
        return new Town(this.terrain);
    }

    disposeSettler() :void {
        throw Error("A hamlet cannot dispose a settler");
    }
}