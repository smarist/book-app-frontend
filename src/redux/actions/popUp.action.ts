import { AnyAction } from 'redux';
import { SET_IS_DELETING, SET_IS_POPUP_OPEN, SET_POPUP_COMPONENT } from '../actionTypes/popUpTypes';

export function setPopupComponent(data: any): AnyAction {
  return {
    type: SET_POPUP_COMPONENT,
    data, 
  };
}

export function showPopup(data: any): AnyAction {
  return {
    type: SET_IS_POPUP_OPEN,
    data, 
  };
}

export function setIsDeleting(data: any): AnyAction {
  return {
    type: SET_IS_DELETING,
    data, 
  };
}
