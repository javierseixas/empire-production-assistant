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
