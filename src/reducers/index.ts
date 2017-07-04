import {combineReducers, ReducersMapObject} from "redux";

import tweetsReducer from "./TweetsReducer";
import userReducer from "./UserReducer";

const reducerMapObjects: ReducersMapObject = {
    user: userReducer,
    tweets: tweetsReducer
};

const combinedReducers: any = combineReducers(reducerMapObjects);

export default combinedReducers;
