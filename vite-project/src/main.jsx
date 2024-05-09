import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click to google "
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
