import React from "react";
import { useSelector } from "react-redux";
import "../styles/Profile.css";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";

const Profile = () => {
  let userInfo = useSelector((state) => state.form);
  return (
    userInfo[0] && (
      <div>
        <div className="profile-main">
          <div className="profile-first">
            <img
              className="header"
              src={userInfo[0].header}
              alt="header image"
            />
            <img
              className="profile-pic"
              src={userInfo[0].image}
              alt="profile picture"
            />
          </div>
          <div className="profile-second">
            <div className="left">
              <div className="name">
                <h1>{userInfo[0].name}</h1>
                <p>({userInfo[0].pronouns})</p>
              </div>
              <h2>{userInfo[0].headline}</h2>
              <h3>{userInfo[0].location}</h3>
            </div>
            <div className="right">
              <div className="jobs">
                <PiSuitcaseSimpleBold />
                <h2> {userInfo[0].job}</h2>
              </div>
              <div className="school">
                <IoMdSchool />
                <h2>{userInfo[0].school}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me">
          <form>
            <label>About</label>
            <p>This is your about me: </p>
          </form>
        </div>
      </div>
    )
  );
};

export default Profile;
