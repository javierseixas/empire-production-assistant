import {logger} from "redux-logger";
declare var window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
import {combineReducers, createStore, applyMiddleware, StoreEnhancer} from 'redux';
import { routerReducer } from 'react-router-redux';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
    default as test, State as ArmyState
} from './reducer';

export type RootState = {
    routing: any,
    pepito: ArmyState,
};

const rootReducer = combineReducers<RootState>({
    routing: routerReducer,
    pepito: test
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

// const rootEpic = combineEpics(
//     currencyConverterEpics,
// );
//const epicMiddleware = createEpicMiddleware(rootEpic);
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const manualLogger: any = (store: any) => (next: any) => (action: any) => {
    console.log("action fired", action);
    next(action);
};

const middlewaree: StoreEnhancer<any> = applyMiddleware(logger, manualLogger);

export const store = createStore(
    rootReducer,
    recoverState(),
    middlewaree
);
export type Store = { getState: () => RootState, dispatch: Function };

// systemjs-hot-reloader hook, rehydrating the state of redux store
export function __reload(exports: any) {
    console.log(exports.store.getState());
}
