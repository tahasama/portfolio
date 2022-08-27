import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/category";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
