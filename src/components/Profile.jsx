import React from "react";
import { useSelector } from "react-redux";
import "../styles/Profile.css";

const Profile = () => {
  let userInfo = useSelector((state) => state.form);
  return (
    <div>
      <img src={''} alt="" />
    </div>
  );
};

export default Profile;
