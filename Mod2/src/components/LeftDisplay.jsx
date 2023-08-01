import { useSelector } from "react-redux";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import "../styles/LeftDisplay.css";
import { IoMdSwap } from "react-icons/io";

const LeftDisplay = () => {
  const [randomImage, setRandomImage] = useState(randomImg());
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const userData = useSelector((state) => state.form);
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }
  function handleDelete(todoIndex) {
    let tempTodos = [...todos];
    tempTodos.splice(todoIndex, 1);

    setTodos(tempTodos);
  }
  function handleReset() {
    setInput("");
    setTodos("");
  }
  function randomImg() {
    return `/src/images/bg${Math.floor(Math.random() * (29 - 3 + 1)) + 3}.png`;
  }

  return (
    userData.length > 0 && (
      <div className="main-left-container">
        <div className="left-container">
          <img
            className="bg-img"
            src={randomImage}
            alt="header for the user"
            width={225}
            height={56}
          />
          <img
            className="headshot-img"
            src={userData[0].image}
            alt=""
            width={72}
            height={72}
          />
          <aside onClick={() => setRandomImage(randomImg())}>
            <IoMdSwap />
          </aside>
          <h1>{userData[0].name}</h1>
          <h2>{userData[0].headline}</h2>
        </div>
        <div className="middle-todo">
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Note to self..."
              minLength={2}
              maxLength={18}
              required
              type="text"
              id="note-to-self"
              value={input}
              onChange={handleInputChange}
            />
            <div className="the-two-buttons">
              <button className="submit-btn" type="submit">
                Submit
              </button>
              <button className="reset-btn" onClick={handleReset} type="reset">
                {" "}
                Clear
              </button>
            </div>
          </form>
        </div>
        <ul className="map-todo">
          {todos.length > 0 &&
            todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <CiCircleRemove
                    className="delete-todo"
                    onClick={() => handleDelete(index)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    )
  );
};

export default LeftDisplay;
