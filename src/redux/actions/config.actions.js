export const SET_CONFIG = "SET_CONFIG"; 
export const SET_DIVISION_PARTNER="SET_DIVISION_PARTNER";
export const SET_SELECTED_DP="SET_SELECTED_DP";
export const SET_SELECTED_ROW="SET_SELECTED_ROW"; 
// initialize state on server
export const initConfig = (data={}) => (dispatch) =>{
  dispatch({ type: SET_CONFIG, config: data });  
};
 