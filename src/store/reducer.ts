import { ActionCreator } from './action-creator';
import {combineReducers} from "redux";
import {RootState} from "./index";
import {routerReducer} from "react-router-redux";

//TODO move
const rootReducer = combineReducers<RootState>({
    routing: routerReducer
});

export const ActionCreators = {
    decreaseArmyCost: new ActionCreator<'DecreaseArmyCost', number>('DecreaseArmyCost')
};

export type Action = typeof ActionCreators[keyof typeof ActionCreators];

// State
export type State = {
    readonly armyCost: number
};

export const initialState: State = {
    armyCost: 0
};

export type RootState = {
    routing: any,
    army: {
        armyCost: 0
    }
};

// Reducer
export function reducer(state: State = initialState, action: Action): State {
    debugger;
    let partialState: Partial<State> | undefined;

    if (action.type === ActionCreators.decreaseArmyCost.type) {
        debugger;
        partialState = { armyCost: action.payload + initialState.armyCost };
    }

    return partialState != null ? { ...state, ...partialState } : state;
}

export default rootReducer;