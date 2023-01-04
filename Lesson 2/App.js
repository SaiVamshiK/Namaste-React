import React from "react";
import ReactDOM from "react-dom";
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello World 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
  },
  "Hello World 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
