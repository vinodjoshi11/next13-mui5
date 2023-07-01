import { SET_CONFIG,SET_DIVISION_PARTNER,SET_SELECTED_DP, SET_SELECTED_ROW } from "../actions/config.actions";
const initialState = {
  config:{},
  divisionPartner: [],
  selectedDP: [],
  selectedRow:{
    isReset:false
  }
};
const Config = (state = initialState, { type, config,data}) => {
  switch (type) {
    case SET_CONFIG:
      return {...state, config: config};
    case SET_DIVISION_PARTNER:
      return {...state, divisionPartner: data};
    case SET_SELECTED_DP:
      return {...state, selectedDP: data};
    case SET_SELECTED_ROW:
      return {...state, selectedRow: data};  
    default:
      return state;
  }
};

export default Config;
