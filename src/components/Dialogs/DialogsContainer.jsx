import Dialogs from './Dialogs';
import { sendMessage} from '../../redux/dialogs-reducer';

import { connect } from 'react-redux'
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';


//<Dialogs messages={messages} dialogs={dialogs} newMessageText={newMessageText}
//               sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} />

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}






export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);