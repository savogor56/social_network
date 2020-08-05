import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
      sendMessage: () => {
        let action = sendMessageActionCreator();
        dispatch(action);
      },
      onMessageChange: (text) => {
        let action = updateNewMessageActionCreator(text);
        dispatch(action);
      }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect
  )(Dialogs);
