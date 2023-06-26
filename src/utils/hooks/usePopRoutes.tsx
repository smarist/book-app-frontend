import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ManageBooks from "../../pages/ManageBooks/ManageBooks";
import { setPopupComponent, showPopup } from "../../redux/actions/popUp.action";

function usePopRoutes() {
  const location = useLocation();
  const reduxDispatch = useDispatch();
  const history = useNavigate();

  React.useEffect(() => {
    if (/\/add-book\/?/g.test(location.pathname)) {
      const popupComponent = <ManageBooks onClose={() => {
        history('/');
        reduxDispatch(showPopup({ ispopupOpen: false }));
      }} />;
      reduxDispatch(setPopupComponent(popupComponent));
      reduxDispatch(showPopup({ ispopupOpen: true, onClose: () => history('/') }));
    }
    if (/\/edit-book\/?/g.test(location.pathname)) {
      const popupComponent = <ManageBooks onClose={() => {
        history('/');
        reduxDispatch(showPopup({ ispopupOpen: false }));
      }} edit />;
      reduxDispatch(setPopupComponent(popupComponent));
      reduxDispatch(showPopup({ ispopupOpen: true, onClose: () => history('/') }));
    }
  }, [location.pathname, history, reduxDispatch]);

  return null;
}

export default usePopRoutes;
