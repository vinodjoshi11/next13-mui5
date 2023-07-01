import { SHOW_DIALOG, HIDE_DIALOG, CONFIRM_DIALOG, SHOW_ACTION_DIALOG, HIDE_ACTION_DIALOG } from "../actions/dialog.action";

const initialState = {
  open: false,
  confirm: false,
  showConfirm: false,
  message: "",
  dialogData: null,
  action:{ 
    open: false,
    confirm: false,
    showConfirm: false
  },
  type: null //confirm | alert | info
};

const Dialog = (state = initialState, { type, data }) => {
  switch (type) {
    case SHOW_DIALOG:
      return { ...state, open: true, confirm: false, ...data };
    case HIDE_DIALOG:
      return initialState;
    case CONFIRM_DIALOG:
      return { ...state, open: false, confirm: true, ...data };
    case SHOW_ACTION_DIALOG:{ 
      return { ...state, action:{...data,open: true} };
    }  
    case HIDE_ACTION_DIALOG:{ 
      return initialState;
    }  
    default:
      return state;
  }
};

export default Dialog;
