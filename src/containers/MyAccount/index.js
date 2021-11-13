// Import from libraries
import { connect } from 'react-redux';

// Import components
import MyAccount from '../../components/MyAccount';

import {
  loadUser,
  loadFavorites,
  removeFromFavorites,
} from '../../actions';

import {
  updateEditionPseudoInput,
  updateEditionEmailInput,
  updateEditionPasswordInput,
  changeAvatar,
  editionPseudoInputValidation,
  editionEmailInputValidation,
  editionPasswordInputValidation,
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
} from '../../actions/userEditionActions';

const mapStateToProps = (state) => ({
  id: state.user.id,
  pseudo: state.user.pseudo,
  email: state.user.email,
  avatar: state.user.avatar,
  favorites: state.anecdotes.favorites,
  pseudoInput: state.userEdition.pseudoInput,
  emailInput: state.userEdition.emailInput,
  passwordInput: state.userEdition.passwordInput,
  editingPseudo: state.userEdition.editingPseudo,
  editingEmail: state.userEdition.editingEmail,
  editingPassword: state.userEdition.editingPassword,
  pseudoIsInvalid: state.userEdition.pseudoIsInvalid,
  emailIsInvalid: state.userEdition.emailIsInvalid,
  passwordIsInvalid: state.userEdition.passwordIsInvalid,
  pseudoError: state.userEdition.pseudoError,
  emailError: state.userEdition.emailError,
  passwordError: state.userEdition.passwordError,
  isConnected: state.user.isConnected,
  isLoadingUser: state.app.isLoadingUser,
  isLoadingFavorites: state.app.isLoadingFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  togglePseudoEdition: () => dispatch(togglePseudoEdition()),
  toggleEmailEdition: () => dispatch(toggleEmailEdition()),
  togglePasswordEdition: () => dispatch(togglePasswordEdition()),
  onPseudoInputChange: (pseudo) => dispatch(updateEditionPseudoInput(pseudo)),
  onEmailInputChange: (email) => dispatch(updateEditionEmailInput(email)),
  onPasswordInputChange: (password) => dispatch(updateEditionPasswordInput(password)),
  pseudoValidation: () => dispatch(editionPseudoInputValidation()),
  emailValidation: () => dispatch(editionEmailInputValidation()),
  passwordValidation: () => dispatch(editionPasswordInputValidation()),
  changeAvatar: (avatar) => dispatch(changeAvatar(avatar)),
  initialize: (url, userId) => {
    switch (url) {
      case '/mon-compte':
        dispatch(loadUser());
        break;
      case '/mon-compte/favoris':
        dispatch(loadFavorites(userId));
        break;
      default:
    }
  },
  deleteFavorite: (userId, anecdoteId) => dispatch(removeFromFavorites(userId, anecdoteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
