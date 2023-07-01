import { COLLAPSE_UPDATE } from "../actions/collapse.actions";

const Collapse = (state = {open: true}, { type, collapse }) => {
  switch (type) {
    case COLLAPSE_UPDATE:
      return collapse;
    default:
      return state;
  }
};

export default Collapse;
