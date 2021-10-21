import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  const profile = props.profile;

  return (
    <div className="profile-card">
      <img src={profile.image} alt={`${profile.title}'s avatar`} />
      <h4>{profile.title}</h4>
      <div></div>
    </div>
  );
}

export default ProfileCard;
