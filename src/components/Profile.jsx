import React from "react";
import { useSelector } from "react-redux";
import "../styles/Profile.css";

const Profile = () => {
  let userInfo = useSelector((state) => state.form);
  return (
    userInfo[0] && (
      <div>
        <img src={userInfo[0].header} alt="header image" />
      </div>
    )
  );
};

export default Profile;
