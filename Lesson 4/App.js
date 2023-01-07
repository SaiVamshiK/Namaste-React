import ReactDOM from "react-dom/client";
import React from "react";
const HeadingComponent = () => {
  return (
    <>
      <h1>Heading</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
