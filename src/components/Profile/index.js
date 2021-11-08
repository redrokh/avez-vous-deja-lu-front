import { useState, useEffect } from 'react';
import { Edit, Check } from 'react-feather';

import defaultAvatar from 'src/assets/img/avatar.svg';
import './profile.scss';

const Profile = ({ editingPseudo, editingEmail, setEditingPseudo, setEditingEmail }) => {
  const [avatar, setAvatar] = useState(defaultAvatar);

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
              reader.onload = () => setAvatar(reader.result);
              reader.readAsDataURL(e.target.files[0]);
            }}
          />
        </label>
      </div>

      <div className="Profile__info">
        {
          editingPseudo && (
            <div className="Profile__pseudo">
              <input />
              <Check onClick={() => setEditingPseudo(false)} strokeWidth="2" color="green" />
            </div>
          )
        }
        {
          !editingPseudo && (
            <div className="Profile__pseudo">
              <span className="Profile__value">redrokh</span>
              <Edit onClick={() => setEditingPseudo(true)} strokeWidth="1" />
            </div>
          )
        }
 
        {
          editingEmail && (
            <div className="Profile__email">
              <input />
              <Check onClick={() => setEditingEmail(false)} strokeWidth="2" color="green" />
            </div>
          )
        }
        {
          !editingEmail && (
            <div className="Profile__email">
              <span className="Profile__value">test@oclock.io</span>
              <Edit onClick={() => setEditingEmail(true)} strokeWidth="1" />
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Profile;
