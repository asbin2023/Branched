import { useState } from "react";

const File = () => {
  const [imageInput, setImageInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [headlineInput, setHeadlineInput] = useState("");
  const [image, setImage] = useState("");

  const [userData, setUserData] = useState([]);

  function handleImageChange(e) {
    setImageInput(e.target.files[0]);
    const render = new FileReader();
    render.onloadend = () => {
      setImage(render.result);
    };
    render.readAsDataURL(e.target.files[0]);
  }

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }
  function handleHeadlineChange(e) {
    setHeadlineInput(e.target.value);
  }

  function handleUserFormSubmit(){
    setUserData([...userData, {name: nameInput, pronouns: }])
  }

  return (
    <div>
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
        <label htmlFor="selectPronouns">Pronouns</label>
        <select required name="pronouns" id="selectPronouns">
          <option value="" hidden>
            Please select
          </option>
          <option value="She/Her">She/Her</option>
          <option value="He/Him">He/Him</option>
          <option value="They/Them">They/Them</option>
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
        <input
          type="file"
          required
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
};

export default File;
