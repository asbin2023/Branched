import { useSelector } from "react-redux";
import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrPowerReset } from "react-icons/gr";
import "../styles/MiddleDisplay.css";

const MiddleDisplay = () => {
  const userInfo = useSelector((state) => state.form);
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState([]);
  const [image, setImage] = useState("");
  const [imageInput, setImageInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setFeed([
      ...feed,
      {
        content: input,
        image: image,
        name: userInfo[0].name,
        headline: userInfo[0].headline,
        profilePic: userInfo[0].image,
      },
    ]);
    console.log(feed);
    setInput("");
  }
  console.log(feed);
  function handleImageChange(e) {
    setImageInput(e.target.files[0]);
    const render = new FileReader();
    render.onloadend = () => {
      setImage(render.result);
    };
    render.readAsDataURL(e.target.files[0]);
  }
  function handleReset() {
    setInput("");
    setFeed("");
    setImage("");
    setImageInput("");
  }

  return (
    userInfo[0]?.name && (
      <div>
        <form className="middle-form" onSubmit={handleFormSubmit}>
          <div className="middle-image-input">
            <img src={userInfo[0]?.image} />
            <input
              value={input}
              type="text"
              required
              placeholder="Start a post"
              onChange={handleInputChange}
            />
          </div>
          <div className="middle-three">
            <button type="submit">Post</button>
            <label htmlFor="middle-file-upload" className="middle-file-upload">
              {" "}
              <HiOutlinePhotograph className="photo-icon" />
              Photo
            </label>
            <input
              style={{ display: "none" }}
              id="middle-file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="reset"
              className="middle-reset-button"
              onClick={handleReset}
            >
              <GrPowerReset className="reset-icon" /> Reset
            </button>
          </div>
        </form>
        <main>
          <div>
            {feed.length > 0 &&
              feed.map((item) => {
                return <div key={item.name}>{item.content}</div>;
              })}
          </div>
        </main>
      </div>
    )
  );
};

export default MiddleDisplay;
