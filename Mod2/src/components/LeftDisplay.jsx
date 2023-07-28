import { useSelector } from "react-redux";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import "../styles/LeftDisplay.css";

const LeftDisplay = () => {
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

  return (
    userData.length > 0 && (
      <div>
        <div className="left-container">
          <img
            className="bg-img"
            src={userData[0].background}
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
