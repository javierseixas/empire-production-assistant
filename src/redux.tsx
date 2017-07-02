import {createStore, Reducer, ReducersMapObject, combineReducers} from "redux";

export class Tweet {

}

export class User {
    public name: string;
    public age: number;
    tweets: Array<Tweet>;
}

const userReducer: Reducer<any> = (state : User = new User(), action: any) => {
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


const tweetsReducer: Reducer<any> = (state : object = [], action: any) => {
    return state;
};

const reducerMapObjects: ReducersMapObject = {
    user: userReducer,
    tweets: tweetsReducer
};

const reducers: any = combineReducers(reducerMapObjects);


const store = createStore(reducers, {});

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});

