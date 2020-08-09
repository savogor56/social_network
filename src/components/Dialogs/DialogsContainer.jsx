import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
      dialogsData: state.dialogsPage.dialogsData,
      messagesData: state.dialogsPage.messagesData,
})

let mapDispatchToProps = {
  sendMessage
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect
  )(Dialogs);
