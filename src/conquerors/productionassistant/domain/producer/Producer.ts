import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";

export interface Producer {
    produce(settlement: Settlement) : Goods;
}