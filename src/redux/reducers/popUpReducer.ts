import {
  SET_IS_DELETING,
  SET_IS_POPUP_OPEN,
  SET_POPUP_COMPONENT,
} from "../actionTypes/popUpTypes";

interface Action {
  type: string;
  data: any; 
}

interface State {
  popupComponent: any; 
  ispopupOpen: boolean;
  isDeleting: boolean;
  onClose: () => void;
}

const initialState: State = {
  popupComponent: null,
  ispopupOpen: false,
  isDeleting: false,
  onClose: () => {},
};

export default function popupReducer(state = initialState, action: Action) {
  const { data, type } = action;
  switch (type) {
    case SET_POPUP_COMPONENT:
      return {
        ...state,
        popupComponent: data,
      };
    case SET_IS_POPUP_OPEN:
      return {
        ...state,
        ispopupOpen: data.ispopupOpen,
        onClose: data.onClose || (() => {}),
      };
    case SET_IS_DELETING:
      return {
        ...state,
        isDeleting: data,
      };
    default:
      return state;
  }
}
