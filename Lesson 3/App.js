import React from "react";
import ReactDOM from "react-dom/client";
const heading = (
  <>
    <h1 id="title" key="key1">
      Namaste React
    </h1>
  </>
);
// Above is the JSX which inturn is a React element.

const HeaderComponent = () => {
  return (
    <>
        {heading}
      <h1>My first Functional Component</h1>
    </>
  );
};
// Above is a Functional Component.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
