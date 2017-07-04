import store from "./store";
import * as army from "./actions/armyActions"

army.decreaseArmyCost(1);

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});