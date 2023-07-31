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
        <MiddleDisplay />
        <News />
      </div>
      
    </div>
  );
};

export default App;
