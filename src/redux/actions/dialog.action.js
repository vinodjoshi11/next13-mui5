export const SHOW_DIALOG = "SHOW_DIALOG";
export const CONFIRM_DIALOG = "CONFIRM_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";
export const SHOW_ACTION_DIALOG = "SHOW_ACTION_DIALOG";
export const HIDE_ACTION_DIALOG = "HIDE_ACTION_DIALOG";

export const show = () => (dispatch) => {
  dispatch({ type: SHOW_DIALOG });
};
export const hide = () => (dispatch) => {
  dispatch({ type: HIDE_DIALOG });
};
export const confirm = () => (dispatch) => {
  dispatch({ type: CONFIRM_DIALOG });
};
export const showActionDialog = (data) => (dispatch) => {
  dispatch({ type: SHOW_ACTION_DIALOG ,data:data});
};
export const hideActionDialog = () => (dispatch) => {
  dispatch({ type: HIDE_ACTION_DIALOG });
};