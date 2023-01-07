import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => {
  return (
    <h1 id="title" key="h2">
      Food Villa
    </h1>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>Heading</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
