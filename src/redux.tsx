import store from "./store";

store.subscribe(() => {
    console.log("store changed ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});