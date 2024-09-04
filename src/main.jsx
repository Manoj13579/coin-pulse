import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from "./Store/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);