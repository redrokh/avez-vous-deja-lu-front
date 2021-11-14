// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Profile from '../../components/Profile';

// Import actions and action creators
import { 
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
  setUserEditionPseudoInput,
  setUserEditionEmailInput,
  setUserEditionPasswordInput,
  pseudoInputValidation,
  emailInputValidation,
  passwordInputValidation,
  changeAvatar,
 } from '../../actions/userEditionActions';

// Link component props to state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
  pseudo: state.user.pseudo,
  email: state.user.email,
  avatar: state.user.avatar,
  baseSrc: state.app.baseSrc,
  pseudoInput: state.userEdition.pseudoInput,
  emailInput: state.userEdition.emailInput,
  passwordInput: state.userEdition.passwordInput,
  editingPseudo: state.userEdition.editingPseudo,
  editingEmail: state.userEdition.editingEmail,
  editingPassword: state.userEdition.editingPassword,
  pseudoInputIsInvalid: state.userEdition.pseudoInputIsInvalid,
  emailInputIsInvalid: state.userEdition.emailInputIsInvalid,
  passwordInputIsInvalid: state.userEdition.passwordInputIsInvalid,
  pseudoInputError: state.userEdition.pseudoInputError,
  emailInputError: state.userEdition.emailInputError,
  passwordInputError: state.userEdition.passwordInputError,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  togglePseudoEdition: () => dispatch(togglePseudoEdition()),
  toggleEmailEdition: () => dispatch(toggleEmailEdition()),
  togglePasswordEdition: () => dispatch(togglePasswordEdition()),
  onPseudoInputChange: (pseudo) => dispatch(setUserEditionPseudoInput(pseudo)),
  onEmailInputChange: (email) => dispatch(setUserEditionEmailInput(email)),
  onPasswordInputChange: (password) => dispatch(setUserEditionPasswordInput(password)),
  onAvatarChange: (avatar) => dispatch(changeAvatar(avatar)),
  pseudoInputValidation: () => dispatch(pseudoInputValidation()),
  emailInputValidation: () => dispatch(emailInputValidation()),
  passwordInputValidation: () => dispatch(passwordInputValidation()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
