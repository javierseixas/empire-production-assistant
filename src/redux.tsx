import {createStore, Reducer, ReducersMapObject, combineReducers, StoreEnhancer, applyMiddleware} from "redux";
import {logger} from "redux-logger";

export class Tweet {

}

export class User {
    public name: string;
    public age: number;
    tweets: Array<Tweet>;
}

const userReducer: Reducer<any> = (state: User = new User(), action: any) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload};
            break;
        }
    }
    return state;
};


const tweetsReducer: Reducer<any> = (state: object = [], action: any) => {
    return state;
};

const reducerMapObjects: ReducersMapObject = {
    user: userReducer,
    tweets: tweetsReducer
};

const reducers: any = combineReducers(reducerMapObjects);

const manualLogger: any = (store: any) => (next: any) => (action: any) => {
    console.log("action fired", action);
    next(action);
};

const middleware: StoreEnhancer<any> = applyMiddleware(logger, manualLogger);

const store = createStore(reducers, {}, middleware);

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});

