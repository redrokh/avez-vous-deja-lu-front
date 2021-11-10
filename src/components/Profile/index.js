import { Edit, Check } from 'react-feather';

import './profile.scss';

const Profile = ({
  pseudo,
  pseudoInput,
  email,
  emailInput,
  avatar,
  editingPseudo,
  editingEmail,
  togglePseudoEdition,
  toggleEmailEdition,
  onNewPseudoChange,
  onNewEmailChange,
  changePseudoRequest,
  changeEmailRequest,
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
      {
        editingPseudo && (
          <div className="Profile__pseudo">
            <input
              value={pseudoInput}
              onChange={(e) => onNewPseudoChange(e.target.value)}
            />
            <Check
              onClick={() => {
                if (pseudoInput.length > 1) {
                  changePseudoRequest();
                }
                togglePseudoEdition();
              }}
              strokeWidth="2"
              color="green"
            />
          </div>
        )
      }
      {
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

      {
        editingEmail && (
          <div className="Profile__email">
            <input
              value={emailInput}
              onChange={(e) => onNewEmailChange(e.target.value)}
            />
            <Check
              onClick={() => {
                if (emailInput.length > 1) {
                  changeEmailRequest();
                }
                toggleEmailEdition();
              }}
              strokeWidth="2"
              color="green"
            />
          </div>
        )
      }
      {
        !editingEmail && (
          <div className="Profile__email">
            <span className="Profile__value">{email}</span>
            <Edit onClick={() => toggleEmailEdition()} strokeWidth="1" />
          </div>
        )
      }
    </div>
  </section>
);

export default Profile;
