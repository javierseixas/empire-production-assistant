export type RootState = {
    army: {
        armyCost: 0
    }
};

export type Store = { getState: () => RootState, dispatch: Function };
