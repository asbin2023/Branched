import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./misc/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <div className="app">
        <App />
      </div>
    </Provider>
  </BrowserRouter>
);
