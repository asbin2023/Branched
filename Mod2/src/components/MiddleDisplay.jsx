import { useSelector } from "react-redux";
import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrPowerReset } from "react-icons/gr";
import "../styles/MiddleDisplay.css";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

const MiddleDisplay = () => {
  const userInfo = useSelector((state) => state.form);
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState([]);
  const [image, setImage] = useState("");
  const [imageInput, setImageInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function randomTime() {
    let arr = [
      "1h",
      "1w",
      "1d",
      "2d",
      "3d",
      "4d",
      "2h",
      "3h",
      "5h",
      "2w",
      "3w",
      "6h",
      "7h",
      "2w",
      "3w",
      "4w",
    ];
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setFeed([
      {
        content: input,
        image: image,
        name: userInfo[0].name,
        headline: userInfo[0].headline,
        profilePic: userInfo[0].image,
        date: randomTime(),
      },
      ...feed,
    ]);
    console.log(feed);
    setInput("");
    setImageInput("");
    setImage("");
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
              disabled
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
                return (
                  <div className="post-card" key={item.name}>
                    <div className="first-post-card">
                      <img
                        src={item.profilePic}
                        height={48}
                        width={48}
                        alt="profile pic"
                      />
                      <div>
                        <h1>{item.name}</h1>
                        <h2>{item.headline}</h2>
                        <h2>
                          {item.date} &#183; <LiaGlobeAmericasSolid />
                        </h2>
                      </div>
                    </div>
                    <div className="second-post-card">
                      <p>{item.content}</p>

                      {item.image && (
                        <img
                          width={555}
                          height="auto"
                          src={item.image}
                          alt="random img"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    )
  );
};

export default MiddleDisplay;
