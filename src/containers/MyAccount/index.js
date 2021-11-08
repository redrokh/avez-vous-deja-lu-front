// Import from libraries
import { connect } from 'react-redux';

// Import components
import MyAccount from '../../components/MyAccount';

import {
  editPseudo,
  editEmail,
  updatePseudo,
  updateEmail,
  changePseudoRequest,
  changeEmailRequest,
  changeAvatar,
  loadUser,
  loadFavorites,
} from '../../actions';

const mapStateToProps = (state) => ({
  id: state.user.id,
  pseudo: state.user.pseudo,
  newPseudo: state.user.newPseudo,
  email: state.user.email,
  newEmail: state.user.newEmail,
  avatar: state.user.avatar,
  favorites: state.anecdotes.favorites,
  editingPseudo: state.user.editingPseudo,
  editingEmail: state.user.editingEmail,
});

const mapDispatchToProps = (dispatch) => ({
  setEditingPseudo: () => dispatch(editPseudo()),
  setEditingEMail: () => dispatch(editEmail()),
  updateNewPseudo: (newPseudo) => dispatch(updatePseudo(newPseudo)),
  updateNewEmail: (newEmail) => dispatch(updateEmail(newEmail)),
  changePseudoRequest: () => dispatch(changePseudoRequest()),
  changeEmailRequest: () => dispatch(changeEmailRequest()),
  changeAvatar: () => dispatch(changeAvatar()),
  initialize: (url) => {
    switch (url) {
      case '/mon-compte':
        dispatch(loadUser());
        break;
      case '/mon-compte/favoris':
        dispatch(loadFavorites());
        break;
      default:
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
