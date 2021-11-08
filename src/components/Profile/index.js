import { useState, useEffect } from 'react';
import { Edit, Check } from 'react-feather';

import defaultAvatar from 'src/assets/img/avatar.svg';
import './profile.scss';

const Profile = ({
  pseudo,
  newPseudo,
  email,
  newEmail,
  avatar,
  editingPseudo,
  editingEmail,
  setEditingPseudo,
  setEditingEmail,
  updateNewPseudo,
  updateNewEmail,
  changePseudoRequest,
  changeEmailRequest,
  changeAvatar,
}) => {
  useEffect(() => {
  }, [avatar]);
  return (
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
              <input value={newPseudo} onChange={(e) => updateNewPseudo(e.target.value)} />
              <Check
                onClick={() => {
                  setEditingPseudo(false);
                  changePseudoRequest();
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
              <Edit onClick={() => setEditingPseudo(true)} strokeWidth="1" />
            </div>
          )
        }
 
        {
          editingEmail && (
            <div className="Profile__email">
              <input
                value={newEmail}
                onChange={(e) => updateNewEmail(e.target.value)}
              />
              <Check
                onClick={() => {
                  setEditingEmail(false);
                  changeEmailRequest();
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
              <Edit onClick={() => setEditingEmail(true)} strokeWidth="1" />
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Profile;
