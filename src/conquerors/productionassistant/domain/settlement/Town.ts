import {Settlement} from "./Settlement";
import {Goods} from "../goods/Goods";
import {Wealth} from "../goods/Wealth";
import {Metropolis} from "./Metropolis";

export class Town extends Settlement{

    // TODO costs

    taxes(): Goods {
        return new Wealth(1);
    }

    // TODO upgrade
    upgrade() : Settlement {

        if (this.terrain instanceof Forest || this.terrain instanceof Mountain) {
            console.log("A town cannot upgrade in that terrain");
            return;
        }

        return new Metropolis(this.terrain);
    }
}