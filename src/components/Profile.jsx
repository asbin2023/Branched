import { useSelector } from "react-redux";
import "../styles/Profile.css";
import { useState } from "react";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSwap } from "react-icons/io";
import {
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
  bg15,
  bg16,
  bg17,
  bg18,
  bg19,
  bg20,
  bg21,
  bg22,
  bg23,
  bg24,
  bg25,
  bg26,
  bg27,
  bg28,
  bg29,
} from "../misc/imageImp";

const Profile = () => {
  const [about, setAbout] = useState("");
  about.length === 0 &&
    setAbout(
      "This is your about section. Click on the edit (pencil) button on the right to modify!"
    );
  const [randomImage, setRandomImage] = useState(randomImg());
  const [input, setInput] = useState(about);
  const [displayToggle, setDisplayToggle] = useState(false);
  let userInfo = useSelector((state) => state.form);

  function randomImg() {
    const imgs = [
      bg3,
      bg4,
      bg5,
      bg6,
      bg7,
      bg8,
      bg9,
      bg10,
      bg11,
      bg12,
      bg13,
      bg14,
      bg15,
      bg16,
      bg17,
      bg18,
      bg19,
      bg20,
      bg21,
      bg22,
      bg23,
      bg24,
      bg25,
      bg26,
      bg27,
      bg28,
      bg29,
    ];
    let num = Math.floor(Math.random() * imgs.length);
    return imgs[num];
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setAbout(input);
    setDisplayToggle(false);
  }
  function handleClear() {
    setInput("");
  }
  function handleToggle() {
    console.log("disp");
    setDisplayToggle(true);
  }
  function handleCloseToggle() {
    setDisplayToggle(false);
  }

  return (
    userInfo[0] && (
      <div className="main-div-main">
        <div className="profile-main">
          <div className="profile-first">
            <img
              className="header"
              src={userInfo[0].header ? userInfo[0].header : randomImage}
              alt="header image"
            />
            {!userInfo[0].header && (
              <aside onClick={() => setRandomImage(randomImg())}>
                <IoMdSwap />
              </aside>
            )}
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
              {userInfo[0].job && (
                <div className="jobs">
                  <PiSuitcaseSimpleBold />
                  <h2> {userInfo[0].job}</h2>
                </div>
              )}
              {userInfo[0].school && (
                <div className="school">
                  <IoMdSchool />
                  <h2>{userInfo[0].school}</h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="about-me">
          <div className="abt-me-1">
            <h2>About</h2>
            <span onClick={handleToggle}>
              <BsPencil />
            </span>
            <p>{about}</p>
          </div>
          <div
            style={{ display: displayToggle ? "block" : "none" }}
            className="abt-me-2"
          >
            <h3>
              Edit about
              <span className="close" onClick={handleCloseToggle}>
                {" "}
                <AiOutlineClose />
              </span>
            </h3>

            <form onSubmit={handleSubmit} action="">
              <label htmlFor="edit">
                You can write about your years of experience, industry, or
                skills. People also talk about their achievements or previous
                job experiences.
              </label>
              <textarea
                value={input}
                onChange={handleInputChange}
                rows={11}
                maxLength={2600}
              />
              <p> {input.length}/2,600</p>

              <div>
                <button
                  onClick={handleClear}
                  className="clear-btn"
                  type="reset"
                >
                  Clear
                </button>

                <button className="submit-btn" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="smaller-screen">
          <p>
            {" "}
            About section is not available on screen sizes less than 800px{" "}
          </p>
        </div>
      </div>
    )
  );
};

export default Profile;
