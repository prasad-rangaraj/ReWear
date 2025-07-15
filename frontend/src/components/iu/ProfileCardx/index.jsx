import React from "react";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-picture" />
      <div className="profile-info">
        <div className="profile-stats">
          <div className="stat-box">Points: 120</div>
          <div className="stat-box">Swaps: 5</div>
        </div>
        <div className="description-box">
          Hi, I'm ReWear User. I love sustainable fashion and swapping clothes!
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
