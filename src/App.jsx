import Feed from "./components/Feed";
import Form from "./components/Form";
import Profile from "./components/Profile";
import RandomUsers from "./components/RandomUsers";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RandomUsers />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
