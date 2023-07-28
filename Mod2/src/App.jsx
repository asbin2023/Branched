import Form from "./components/Form";
import LeftDisplay from "./components/LeftDisplay";
import MiddleDisplay from "./components/MiddleDisplay";

const App = () => {
  return (
    <div>
      <Form />
      <div className="left-and-middle">
        <LeftDisplay />
        <MiddleDisplay />
      </div>
    </div>
  );
};

export default App;
