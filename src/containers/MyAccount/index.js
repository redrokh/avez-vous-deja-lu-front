// Import from libraries
import { connect } from 'react-redux';

// Import components
import MyAccount from '../../components/MyAccount';

import {
  togglePseudoEdition,
  toggleEmailEdition,
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
  pseudoInput: state.user.pseudoInput,
  email: state.user.email,
  emailInput: state.user.emailInput,
  avatar: state.user.avatar,
  favorites: state.anecdotes.favorites,
  editingPseudo: state.user.editingPseudo,
  editingEmail: state.user.editingEmail,
});

const mapDispatchToProps = (dispatch) => ({
  togglePseudoEdition: () => dispatch(togglePseudoEdition()),
  toggleEmailEdition: () => dispatch(toggleEmailEdition()),
  onNewPseudoChange: (pseudo) => dispatch(updatePseudo(pseudo)),
  onNewEmailChange: (email) => dispatch(updateEmail(email)),
  changePseudoRequest: () => dispatch(changePseudoRequest()),
  changeEmailRequest: () => dispatch(changeEmailRequest()),
  changeAvatar: (avatar) => dispatch(changeAvatar(avatar)),
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
