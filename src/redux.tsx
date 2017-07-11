import {Layout} from "./components/Layout";
import * as React from "react"
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import ArmyModule from "./components/army/ArmyModule";

import { Router, Route } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {store} from "./store/index";

const history = syncHistoryWithStore(browserHistory, store) as any;
//army.decreaseArmyCost(1);

// store.subscribe(() => {
//     console.log("store changed ", store.getState());
// });
//
// store.dispatch({type: "CHANGE_NAME", payload: "Will"});
// store.dispatch({type: "CHANGE_AGE", payload: 35});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="*" component={ArmyModule} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);
