import {Terrain} from "./conquerors/productionassistant/domain/terrain/Terrain";
import {Landscape} from "./conquerors/productionassistant/domain/terrain/Landscape";
import {Settlement} from "./conquerors/productionassistant/domain/settlement/Settlement";
import {Mountain} from "./conquerors/productionassistant/domain/terrain/Mountain";
import {Hamlet} from "./conquerors/productionassistant/domain/settlement/Hamlet";
import {Town} from "./conquerors/productionassistant/domain/settlement/Town";
import {RxEventBus} from "./conquerors/productionassistant/domain/RxEventBus";
import {CurrentReserve} from "./conquerors/productionassistant/domain/reserve/CurrentReserve";

import * as React from "react"
import * as ReactDOM from "react-dom";
import {Hello} from "./components/Hello";


let eventBus: RxEventBus = new RxEventBus;

let landscape: Terrain = new Landscape();
let mountain: Terrain = new Mountain();

let hamlet: Settlement = new Hamlet(landscape, eventBus);
let town: Settlement = new Town(mountain, eventBus);

let currentReserve: CurrentReserve = new CurrentReserve(eventBus);
console.log("Hamlet " + hamlet.production().quantity);

console.log("Town " + town.production().quantity);
console.log("Town " + town.taxes().quantity);
town.disposeSettler();


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById('container')
);