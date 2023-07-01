export const REFRESH_PAGE = "REFRESH_PAGE";

// initialize state on server
export const initialRefresh = () => (dispatch) =>
  dispatch({ type: REFRESH_PAGE, refresh: "" });

// initialize state on client
export const initState = () => (dispatch) =>
  dispatch({ type: REFRESH_PAGE, refresh: "" });

export const updateRefresh = () => ({
  type: REFRESH_PAGE
});
