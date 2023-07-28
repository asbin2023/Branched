import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/LeftDisplay.css";
const LeftDisplay = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const userData = useSelector((state) => state.form);
  console.log(userData);
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
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

          <hr />
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="note-to-self">Note to self:</label>
            <br />
            <input
              required
              type="text"
              id="note-to-self"
              value={input}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
            <button onClick={handleReset} type="reset">
              Reset
            </button>
          </form>
          <div>
            <ul>
              {todos.length > 0 &&
                todos.map((todo, index) => {
                  return <li key={index}>{todo}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default LeftDisplay;
