import {Terrain} from "./conquerors/productionassistant/domain/terrain/Terrain";
import {Landscape} from "./conquerors/productionassistant/domain/terrain/Landscape";
import {Settlement} from "./conquerors/productionassistant/domain/settlement/Settlement";
import {Mountain} from "./conquerors/productionassistant/domain/terrain/Mountain";
import {Hamlet} from "./conquerors/productionassistant/domain/settlement/Hamlet";
import {Town} from "./conquerors/productionassistant/domain/settlement/Town";

let landscape : Terrain = new Landscape();
let mountain : Terrain = new Mountain();

let hamlet : Settlement = new Hamlet(landscape);
let town : Settlement = new Town(mountain);

console.log("Hamlet " + hamlet.production().quantity);
console.log("Town " + town.production().quantity);
console.log("Town " + town.taxes().quantity);