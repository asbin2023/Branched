import Feed from "./components/Feed";
import Form from "./components/Form";
import RandomUsers from "./components/RandomUsers";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RandomUsers />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
