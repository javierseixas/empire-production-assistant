import { ActionCreator } from './action-creator';

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

// Reducer
export default function reducer(state: State = initialState, action: Action): State {
    debugger;
    let partialState: Partial<State> | undefined;

    if (action.type === ActionCreators.decreaseArmyCost.type) {
        debugger;
        partialState = { armyCost: action.payload + initialState.armyCost };
    }

    return partialState != null ? { ...state, ...partialState } : state;
}