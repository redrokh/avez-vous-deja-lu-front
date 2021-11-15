import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!isConnected) {
      history.push('/connexion');
    }
  }, [isConnected]);

  return (
    <section className="Profile">
      <div className="Profile__avatar">
        <img className="Profile__avatar-img" src={`${baseSrc}${avatar}`} alt="avatar" />

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
              reader.onload = () => onAvatarChange(reader.result);
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
                  emailInputIsInvalid && (
                    <span className="Profile__field-error">{emailInputError}</span>
                  )
                }
              </div>
              <Check
                onClick={() => emailInputValidation()}
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
                  passwordInputIsInvalid && (
                    <span className="Profile__field-error">{passwordInputError}</span>
                  )
                }
              </div>
              <Check
                onClick={() => passwordInputValidation()}
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
};

export default Profile;
