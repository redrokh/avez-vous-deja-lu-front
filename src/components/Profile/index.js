import { Edit, Check, X } from 'react-feather';

import './profile.scss';

const Profile = ({
  pseudo,
  email,
  avatar,
  baseSrc,
  editingPseudo,
  editingEmail,
  editingPassword,
  pseudoInput,
  emailInput,
  passwordInput,
  onPseudoInputChange,
  onEmailInputChange,
  onPasswordInputChange,
  onAvatarChange,
  pseudoInputIsInvalid,
  emailInputIsInvalid,
  passwordInputIsInvalid,
  pseudoInputError,
  emailInputError,
  passwordInputError,
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
  pseudoInputValidation,
  emailInputValidation,
  passwordInputValidation,
  isConnected,
}) =>  (
  <section className="Profile">
    <div className="Profile__avatar">
      <img className="Profile__avatar-img" src={`${avatar}?${new Date()}`} alt="avatar" />

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
            reader.onload = () => {
              onAvatarChange(reader.result);
            };
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
                pseudoInputIsInvalid && (
                  <span className="Profile__field-error">{pseudoInputError}</span>
                )
              }
            </div>

            <Check
              onClick={() => pseudoInputValidation()}
              strokeWidth="2"
              color="#32a64b"
            />

            <X color="#e75454" onClick={() => togglePseudoEdition()} />
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
              strokeWidth="2"
              color="#bbb"
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
                emailInputIsInvalid && (
                  <span className="Profile__field-error">{emailInputError}</span>
                )
              }
            </div>
            <Check
              onClick={() => emailInputValidation()}
              strokeWidth="2"
              color="#32a64b"
            />

            <X color="#e75454" onClick={() => toggleEmailEdition()} />
          </div>
        )
      }
      { // Email
        !editingEmail && (
          <div className="Profile__email">
            <span className="Profile__value">{email}</span>
            <Edit onClick={() => toggleEmailEdition()} strokeWidth="2" color="#bbb" />
          </div>
        )
      }

      { // Password
        editingPassword && (
          <div className="Profile__password">
            <div className="Profile__field">
              <input
                className="Profile__field-input"
                type="password"
                autoComplete="off"
                value={passwordInput}
                onChange={(e) => onPasswordInputChange(e.target.value)}
              />
              {
                passwordInputIsInvalid && (
                  <span className="Profile__field-error">{passwordInputError}</span>
                )
              }
            </div>
            <Check
              onClick={() => passwordInputValidation()}
              strokeWidth="2"
              color="#32a64b"
            />

            <X color="#e75454" onClick={() => togglePasswordEdition()} />
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
