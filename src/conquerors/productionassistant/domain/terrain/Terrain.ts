import {Settlement} from "../settlement/Settlement";
import {Goods} from "../goods/Goods";

export interface Terrain {

    produce(settlement: Settlement): Goods;

}