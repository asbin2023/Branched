import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSubmit } from "../misc/formSlice";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

const File = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.form);
  const disptach = useDispatch();

  const [imageInput, setImageInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [headlineInput, setHeadlineInput] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  const [locationInput, setLocationInput] = useState("Denver, Colorado");
  const [image, setImage] = useState("");

  function handleImageChange(e) {
    setImageInput(e.target.files[0]);
    const render = new FileReader();
    render.onloadend = () => {
      setImage(render.result);
    };
    render.readAsDataURL(e.target.files[0]);
  }

  function handleFormReset() {
    setImageInput("");
    setNameInput("");
    setHeadlineInput("");
    setSelectedInput("");
    setLocationInput("");
    setImage("");
  }

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }
  function handleSelectedInputChange(e) {
    setSelectedInput(e.target.value);
  }
  function handleHeadlineChange(e) {
    setHeadlineInput(e.target.value);
  }
  function handleLocationChange(e) {
    setLocationInput(e.target.value);
  }

  function handleUserFormSubmit(e) {
    e.preventDefault();

    disptach(
      handleSubmit({
        name: nameInput,
        pronouns: selectedInput,
        headline: headlineInput,
        location: locationInput,
        image: image,
      })
    );
    navigate("/feed");

    handleFormReset();
  }

  return (
    <div className="form-main">
      <div className="form-display">
        <div>
          <h1>Welcome to Branched, Let's get Branching!</h1>
        </div>
        <form onSubmit={handleUserFormSubmit} action="">
          <label htmlFor="name">Full Name:</label>
          <input
            onChange={handleNameChange}
            value={nameInput}
            required
            type="text"
            id="name"
          />
          <br />
          <label htmlFor="selectPronouns">Pronouns:</label>
          <select
            value={selectedInput}
            onChange={handleSelectedInputChange}
            required
            name="pronouns"
            id="selectPronouns"
          >
            <option value="" hidden>
              Please select
            </option>
            <option value="She/Her">She/Her</option>
            <option value="He/Him">He/Him</option>
            <option value="They/Them">They/Them</option>
            <option value="Ze/Zir">Ze/Zir</option>
            <option value="Xe/Xem">Xe/Xem</option>
            <option value="Ve/Ver">Ve/Ver</option>
            <option value="Ne/Nem">Ne/Nem</option>
            <option value="Ey/Em">Ey/Em</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label htmlFor="headline">Headline:</label>
          <input
            onChange={handleHeadlineChange}
            value={headlineInput}
            required
            type="text"
            id="headline"
          />

          <br />

          <label htmlFor="location">Location:</label>
          <input
            onChange={handleLocationChange}
            value={locationInput}
            required
            type="text"
            id="location"
          />

          <br />
          <label htmlFor="imageFile">Choose your image</label>
          <input
            type="file"
            id="imageFile"
            required
            accept="image/*"
            onChange={handleImageChange}
          />
          <br />
          <button type="submit">Submit</button>
          <button onClick={handleFormReset} type="reset">
            Clear
          </button>
        </form>
      </div>
      <img className="hero-img" src="/src/images/svgg.svg" alt="" />
    </div>
  );
};

export default File;
