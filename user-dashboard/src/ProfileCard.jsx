import React from 'react';

function ProfileCard({ user, onEdit }) {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;