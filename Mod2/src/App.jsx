import Feed from "./components/Feed";
import Form from "./components/Form";
import RandomUsers from "./components/RandomUsers";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
      <RandomUsers />
    </div>
  );
};

export default App;
