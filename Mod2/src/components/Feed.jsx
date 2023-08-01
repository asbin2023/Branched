import LeftDisplay from "./LeftDisplay";
import MiddleDisplay from "./MiddleDisplay";
import News from "./News";

const Feed = () => {
  return (
    <div>
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

export default Feed;
