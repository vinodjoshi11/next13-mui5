import config from "./config.reducer";
import collapse from "./collapse.reducer";
import refreshPage from "./refresh.reducer";
import dialog from "./dialog.reducer";   
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
const combinedReducer = combineReducers({ 
  config,
  refreshPage,
  dialog,
  collapse
});
const reducer = (clientState, serverState) => {
  const { type, payload } = serverState;
  switch (type) {
    case HYDRATE: {
      return {
        ...clientState, // use previous state
        ...payload // apply delta from hydration
      };
    }
    default:
      return combinedReducer(clientState, serverState);
  }
};

export default reducer;
