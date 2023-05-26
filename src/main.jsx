// @vendors
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// @components
import App from "./App.jsx";
import { Header } from "./components/index.js";

// @styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// @app
import { store } from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
