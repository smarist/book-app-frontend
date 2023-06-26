import { connect } from 'react-redux';
import { showPopup } from '../../redux/actions/popUp.action';
import Popup from './Popup';
import { Dispatch } from 'redux';
import { RootState } from '../../redux/types';

interface StateProps {
  ispopupOpen: boolean;
  popupComponent: any; 
  onClose: () => void;
}

interface DispatchProps {
  showPopup: (data: boolean) => void;
}

const mapStateToProps = ({ popup }: RootState): StateProps => ({
  ispopupOpen: popup.ispopupOpen,
  popupComponent: popup.popupComponent,
  onClose: popup.onClose,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  showPopup: (data: boolean) => dispatch(showPopup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
