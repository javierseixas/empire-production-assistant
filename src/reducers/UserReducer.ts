import {User} from "../dummy/dummies";
import {Reducer} from "redux";

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

export default userReducer;