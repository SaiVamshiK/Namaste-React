import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "key1",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    key: "key2",
  },
  "Heading 2"
);
console.log(heading1);
const heading3 = (
  <>
    <h1 key="key3">Heading3</h1>
    <h1 key="key4">Heading4</h1>
  </>
);
console.log(heading3);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2,heading3]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hello");
root.render(container);
