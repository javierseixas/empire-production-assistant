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

import * as Redux from "redux";
import {Layout} from "./components/Layout";


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

// Redux
const counter = (state = 0, action : any) => {
  switch (action.type) {
      case 'DISPOSE_SETTLER':
          return state - 1;
      default:
          return state;
  }
};

const { createStore } = Redux;
const store = createStore(counter);


ReactDOM.render(
    <Layout compiler="TypeScript" framework="React" />,
    document.getElementById('container')
);

//store.subscribe(render);

//render();