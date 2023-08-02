import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrPowerReset } from "react-icons/gr";
import "../styles/MiddleDisplay.css";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";

const MiddleDisplay = () => {
  const userInfo = useSelector((state) => state.form);
  const quote = useSelector((state) => state.quote);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [imageInput, setImageInput] = useState("");

  let tempQuotes = [];

  async function getImage() {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    let imgg = data.results[0].picture.large;
    return imgg;
  }

  useEffect(() => {
    if (quote) {
      (async () => {
        let tempQuotes = [];
        for (let i = 0; i < quote.length; i++) {
          let capitalized =
            quote[i].headline[0].toUpperCase() + quote[i].headline.slice(1);
          let temp = await getImage(); // Wait for the image to be fetched
          tempQuotes.push({
            id: crypto.randomUUID(),
            content: quote[i].quote,
            image: image,
            name: quote[i].author,
            headline: capitalized,
            profilePic: temp,
            date: randomTime(),
            liked: false,
          });
        }

        setFeed(tempQuotes);
      })();
    }
  }, [quote]);

  const [feed, setFeed] = useState(tempQuotes);

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handlePostDelete(id) {
    setFeed(
      feed.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function handleLiked(id) {
    setFeed(
      feed.map((item) => {
        if (item.id === id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      })
    );
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
        id: crypto.randomUUID(),
        content: input,
        image: image,
        name: userInfo[0].name,
        headline: userInfo[0].headline,
        profilePic: userInfo[0].image,
        date: randomTime(),
        liked: false,
      },
      ...feed,
    ]);

    setInput("");
    setImageInput("");
    setImage("");
  }

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
              disabled={image ? true : false}
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
                  <div className="post-card" key={item.id}>
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
                        <h2
                          className="post-trash"
                          onClick={() => handlePostDelete(item.id)}
                        >
                          <BsTrash3 />
                        </h2>
                        <h2>
                          {item.date} &#183; <LiaGlobeAmericasSolid />
                        </h2>
                      </div>
                    </div>
                    <div className="second-post-card">
                      <p>{item.content}</p>

                      {item.image && <img src={item.image} alt="random img" />}
                    </div>
                    <hr className="middle-hr" />
                    <div className="third-post-card">
                      <div onClick={() => handleLiked(item.id)}>
                        <p>{item.liked ? <AiFillLike /> : <AiOutlineLike />}</p>
                        <p>{item.liked ? "Unlike" : "Like"}</p>
                      </div>
                      <div>
                        <p>
                          {" "}
                          <FaRegCommentDots />{" "}
                        </p>
                        <p>Comment</p>
                      </div>
                      <div>
                        <p>
                          {" "}
                          <AiOutlineRetweet />
                        </p>{" "}
                        <p>Repost</p>
                      </div>
                      <div>
                        <p>
                          {" "}
                          <BiShare />
                        </p>{" "}
                        <p>Share</p>
                      </div>
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
