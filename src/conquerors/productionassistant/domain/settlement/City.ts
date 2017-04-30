import {Settlement} from "./Settlement";
import {Goods} from "../goods/Goods";
import {Wealth} from "../goods/Wealth";
import {Metropolis} from "./Metropolis";

export class City extends Settlement{

    // TODO costs

    taxes(): Goods {
        return new Wealth(2);
    }

    // TODO upgrade
    upgrade() : Settlement {
        return new Metropolis(this.terrain);
    }
}