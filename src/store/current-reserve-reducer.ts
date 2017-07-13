import {Reducer} from "redux";



// State
export type State = {
    readonly wealth: number
};

export const initialState: State = {
    wealth: 0
};

const stateReducer: Reducer<any> = (state: State = initialState, action: any) => {

    return state;
};

export default stateReducer;