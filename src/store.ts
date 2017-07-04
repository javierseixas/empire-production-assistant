import {createStore, StoreEnhancer, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import combinedReducers from "./reducers";

const manualLogger: any = (store: any) => (next: any) => (action: any) => {
    console.log("action fired", action);
    next(action);
};

const middleware: StoreEnhancer<any> = applyMiddleware(logger, manualLogger);

const store = createStore(combinedReducers, {}, middleware);

export default store;
