import Form from "./components/Form";
import LeftDisplay from "./components/LeftDisplay";
import MiddleDisplay from "./components/MiddleDisplay";
import News from "./components/News";

const App = () => {
  return (
    <div>
      {/* <Form /> */}

      <div className="left-and-middle">
        <LeftDisplay />
        <div className="right-side">
          <MiddleDisplay />
          <News />
        </div>
      </div>
    </div>
  );
};

export default App;
