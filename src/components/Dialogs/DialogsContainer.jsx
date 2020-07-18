import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return (
    {
      dialogsPage: state.dialogsPage
    }
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
    {
      sendMessage: () => {
        let action = sendMessageActionCreator();
        dispatch(action);
      },
      onMessageChange: (text) => {
        let action = updateNewMessageActionCreator(text);
        dispatch(action);
      }
    }
  )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
