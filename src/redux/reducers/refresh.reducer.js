import { REFRESH_PAGE } from "../actions/refresh.action";

const Refresh = (state = false, { type, page }) => {
  switch (type) {
    case REFRESH_PAGE:
      if (state === page) {
        return "";
      }
      return page;
    default:
      return state;
  }
};

export default Refresh;
