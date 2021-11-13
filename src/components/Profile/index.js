import { Edit, Check, X } from 'react-feather';

import './profile.scss';

const Profile = ({
  pseudo,
  email,
  pseudoInput,
  emailInput,
  passwordInput,
  avatar,
  editingPseudo,
  editingEmail,
  editingPassword,
  pseudoIsInvalid,
  emailIsInvalid,
  passwordIsInvalid,
  pseudoError,
  emailError,
  passwordError,
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
  onPseudoInputChange,
  onEmailInputChange,
  onPasswordInputChange,
  pseudoValidation,
  emailValidation,
  passwordValidation,
  changeAvatar,
}) => (
  <section className="Profile">
    <div className="Profile__avatar">
      <img className="Profile__avatar-img" src={avatar} alt="avatar" />

      <label
        className="Profile__avatar-label"
        htmlFor="avatar"
      >
        <Edit className="Profile__avatar-edit" strokeWidth="2" color="lightgrey" />
        <input
          className="Profile__avatar-input"
          type="file"
          htmlFor="avatar"
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => changeAvatar(reader.result);
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
      </label>
    </div>

    <div className="Profile__info">

      { // Pseudo input
        editingPseudo && (
          <div className="Profile__pseudo">
            <div className="Profile__field">
              <input
                className="Profile__field-input"
                value={pseudoInput}
                onChange={(e) => onPseudoInputChange(e.target.value)}
              />
              {
                pseudoIsInvalid && (
                  <span className="Profile__field-error">{pseudoError}</span>
                )
              }
            </div>

            <Check
              onClick={() => pseudoValidation()}
              strokeWidth="2"
              color="green"
            />

            <X color="red" onClick={() => togglePseudoEdition()} />
          </div>
        )
      }
      { // Pseudo
        !editingPseudo && (
          <div className="Profile__pseudo">
            <span className="Profile__value">{pseudo}</span>
            <Edit
              onClick={() => {
                togglePseudoEdition();
              }}
              strokeWidth="1"
            />
          </div>
        )
      }

      { // Email input
        editingEmail && (
          <div className="Profile__email">
            <div className="Profile__field">
              <input
                className="Profile__field-input"
                value={emailInput}
                onChange={(e) => onEmailInputChange(e.target.value)}
              />
              {
                emailIsInvalid && (
                  <span className="Profile__field-error">{emailError}</span>
                )
              }
            </div>
            <Check
              onClick={() => emailValidation()}
              strokeWidth="2"
              color="green"
            />

            <X color="red" onClick={() => toggleEmailEdition()} />
          </div>
        )
      }
      { // Email
        !editingEmail && (
          <div className="Profile__email">
            <span className="Profile__value">{email}</span>
            <Edit onClick={() => toggleEmailEdition()} strokeWidth="1" />
          </div>
        )
      }

      { // Password
        editingPassword && (
          <div className="Profile__password">
            <div className="Profile__field">
              <input
                className="Profile__field-input"
                value={passwordInput}
                onChange={(e) => onPasswordInputChange(e.target.value)}
              />
              {
                passwordIsInvalid && (
                  <span className="Profile__field-error">{passwordError}</span>
                )
              }
            </div>
            <Check
              onClick={() => passwordValidation()}
              strokeWidth="2"
              color="green"
            />

            <X color="red" onClick={() => togglePasswordEdition()} />
          </div>
        )
      }
      {
        !editingPassword && (
          <div className="Profile__password">
            <button type="button" onClick={() => togglePasswordEdition()}>Modifier votre mot de passe</button>
          </div>
        )
      }
    </div>
  </section>
);

export default Profile;
