export type PopupProps = {
  ispopupOpen: boolean,
  popupComponent?: any,
  showPopup: (show: boolean) => void,
  onClose?: () => void,
}