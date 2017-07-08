import store from "./store";
import * as army from "./actions/armyActions"
import {Layout} from "./components/Layout";
import * as React from "react"
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

army.decreaseArmyCost(1);

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});

ReactDOM.render(
    <Provider store={store}>
        <Layout compiler="TypeScript" framework="React" />
    </Provider>,
    document.getElementById('container')
);
