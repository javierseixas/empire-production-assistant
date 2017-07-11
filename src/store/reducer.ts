import { ActionCreator } from './action-creator';
import {Reducer} from "redux";

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

const pepitoReducer: Reducer<any> = (state: State = initialState, action: any) => {

    let partialState: Partial<State> | undefined;

    if (action.type === ActionCreators.decreaseArmyCost.type) {
        partialState = { armyCost: state.armyCost - 1};
    }

    return partialState != null ? { ...state, ...partialState } : state;
};

export default pepitoReducer;